import React, { useState, useEffect } from 'react';
import firebase from "firebase/compat/app";
import 'firebase/compat/storage';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/Onboarding/UploadVideo.css';

function UploadVideo() {
  const [videoUrl, setVideoUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [trainingModule, setTrainingModule] = useState('');
  const [uploadReady, setUploadReady] = useState(false);

  useEffect(() => {
    if (videoUrl && imageUrl) {
      setUploadReady(true);
    } else {
      setUploadReady(false);
    }
  }, [videoUrl, imageUrl]);

  const handleFileUpload = (event, setImageUrl) => {
    const file = event.target.files[0];
    if (file) {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(file.name);
      fileRef.put(file).then(() => {
        fileRef.getDownloadURL().then(url => {
          setImageUrl(url);
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
      await axios.post('http://localhost:9000/api/video', videoData);
      console.log('Video Uploaded successfully');
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  }

  return (
    <div className="">
      <Header />
      <form onSubmit={handleSubmit}>
        <input type="file" accept="video/*" onChange={handleVideoUpload} />
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <select value={trainingModule} onChange={(e) => setTrainingModule(e.target.value)}>
          <option value="">Select Training Module</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Product Manager">Product Manager</option>
          <option value="Marketing">Marketing</option>
          <option value="HR">HR</option>
        </select>
        <button type="submit" disabled={!uploadReady}>Submit</button>
      </form>
      <Footer />
    </div>
  );
}

export default UploadVideo;
