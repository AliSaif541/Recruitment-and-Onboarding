import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import profilePicture from '../../images/hallway.jpg'; 
import animation from '../../images/animation.json'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TrainingComponentHead from '../../components/Onboarding/TrainingComponentHead';
import '../../styles/Onboarding/TrainingVideos.css';

function TrainingVideos({ currentModule, setCurrentVideo }) {
  // Dummy data for video thumbnails
  const videos = [
    { id: 1, title: 'Video 1', description: 'Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1', thumbnail: profilePicture },
    { id: 2, title: 'Video 2', description: 'Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1', thumbnail: profilePicture },
    { id: 3, title: 'Video 3', description: 'Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1', thumbnail: profilePicture },
    { id: 4, title: 'Video 4', description: 'Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1', thumbnail: profilePicture },
    { id: 5, title: 'Video 5', description: 'Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1', thumbnail: profilePicture },
    { id: 6, title: 'Video 6', description: 'Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1', thumbnail: profilePicture },
    { id: 7, title: 'Video 7', description: 'Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1', thumbnail: profilePicture },
    { id: 8, title: 'Video 8', description: 'Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1', thumbnail: profilePicture },
    { id: 9, title: 'Video 9', description: 'Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1.Description for Video 1', thumbnail: profilePicture },
    // Add more video data as needed
  ];
  const [videosData, setVideosData] = useState([]);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/video');
        setVideosData(response.data);
      } catch (error) {
        console.error('Error fetching training modules:', error);
      }
    };
    fetchVideoData();

}, []);

  return (
    <div className="videos-list-container">
        <Header />
        <TrainingComponentHead title={currentModule.name} description={currentModule.Description} animation={animation}/>
        <h2 className="box-container-h2">Explore our diverse range of training videos!</h2>
        <div className="video-grid">
          {videos.map((video, index) => (
            <div key={video.id} className="video-box">
              <img className="video-thumbnail" src={video.thumbnail} alt={`Thumbnail for ${video.title}`} />
              <div className="video-info">
                <h2>{video.title}</h2>
                <p className="description">{video.description.substring(0, 100)}</p>
                <button>Watch Video</button>
              </div>
            </div>
          ))}
        </div>
        <Footer />
    </div>
  );
}

export default TrainingVideos;
