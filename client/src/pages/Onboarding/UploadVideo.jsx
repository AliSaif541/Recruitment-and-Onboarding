import React, { useState, useEffect } from 'react';
import firebase from "firebase/compat/app";
import 'firebase/compat/storage';
import axios from 'axios';
import '../../styles/Onboarding/UploadVideo.css'; 
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function UploadVideo() {
  const [videoUrl, setVideoUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [trainingModule, setTrainingModule] = useState('');
  const [uploadReady, setUploadReady] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (videoUrl && imageUrl) {
      setUploadReady(true);
      setErrorMsg('Data Uploaded!');
    } else {
      setUploadReady(false);
    }
  }, [videoUrl, imageUrl]);

  const handleFileUpload = (event, setImageUrl) => {
    const file = event.target.files[0];
    if (file) {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(file.name);
      setErrorMsg('Uploading data...'); // Display uploading message
      fileRef.put(file).then(() => {
        fileRef.getDownloadURL().then(url => {
          setImageUrl(url);
          if (videoUrl && imageUrl) {
            setUploadReady(true);
            setErrorMsg('');
          }
        });
      });
    }
  }

  const handleImageUpload = (event) => {
    handleFileUpload(event, setImageUrl);
  }

  const handleVideoUpload = (event) => {
    handleFileUpload(event, setVideoUrl);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const videoData = {
      videoUrl,
      imageUrl,
      title,
      description,
      trainingModule
    };
    console.log("videoData: ", videoData);

    try {
      setErrorMsg('Uploading data...'); // Display uploading message
      await axios.post('http://localhost:9000/api/video', videoData);
      setErrorMsg('Video uploaded successfully');
      console.log('Video Uploaded successfully');
    } catch (error) {
      console.error('Error uploading data:', error);
      setErrorMsg('Error uploading data');
    }
  }

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        
        <div className="upload-container">
          <h1>Upload Video</h1>
          <div className="form-row">
            <div className="left-column">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
              
              <label htmlFor="trainingModule">Training Module</label>
              <select value={trainingModule} onChange={(e) => setTrainingModule(e.target.value)}>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Product Manager">Product Manager</option>
                <option value="Company Policy">Company Policy</option>
                <option value="Marketing">Marketing</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Sales">Sales</option>
              </select>
            </div>
            <div className="right-column">
              <label htmlFor="description">Description</label>
              <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
          </div>
          <div className="thumbnail-upload-section">
            <label htmlFor="thumbnail">Thumbnail</label>
            <input type="file" id="thumbnail" accept="image/*" onChange={handleImageUpload} />
          </div>
          <label htmlFor="thumbnail">Video</label>
          <div className="file-upload-box">
            <div className="file-upload-content">
              Select a file or drag and drop here
              <br />
              MP4, MKV, MOV, or AVI, file size no more than 100MB
            </div>
            <div className='video-upload-section'>
              <input type="file" accept=".mkv,.mov,.avi,.mp4" onChange={handleVideoUpload} />
            </div>
          </div>
          {errorMsg !== '' && <p>{errorMsg}</p>}
          <button type="submit" className='UploadVideo-btn' disabled={!uploadReady}>Submit</button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
    
export default UploadVideo;
