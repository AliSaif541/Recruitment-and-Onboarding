import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import profilePicture from '../../images/hallway.jpg'; 
import animation from '../../images/animation.json'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TrainingComponentHead from '../../components/Onboarding/TrainingComponentHead';
import '../../styles/Onboarding/TrainingVideos.css';
import { Link } from 'react-router-dom';
import OnboardingHeader from '../../components/OnboardingHeader';

function TrainingVideos({ currentModule, setCurrentVideo, user, setUser }) {
  const [videosData, setVideosData] = useState([]);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get('https://recruitment-and-onboarding-backend.vercel.app/api/video/training', {
          params: {
            trainingModule: currentModule.name
          }
        });
        setVideosData(response.data);
      } catch (error) {
        console.error('Error fetching training modules:', error);
      }
    };
    fetchVideoData();

}, []);

  return (
    <div className="training-videos-list-container">
        <OnboardingHeader user={user} setUser={setUser} />
        <TrainingComponentHead title={currentModule.name} description={currentModule.Description} animation={animation}/>
        <h2 className="box-container-h2">Explore our diverse range of training videos!</h2>
        <div className="training-video-grid">
          {videosData.map((video, index) => (
            <Link className='Link' onClick={() => setCurrentVideo(video)} to={`/video/${index}`}>
              <div key={video.id} className="training-video-box">
                <img className="training-video-thumbnail" src={video.imageUrl} alt={`Thumbnail for ${video.title}`} />
                <div className="video-info">
                  <h2>{video.title}</h2>
                  <p className="training-video-description">{video.description.substring(0, 100)}</p>
                  <button className='training-video-button'>Watch Video</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Footer />
    </div>
  );
}

export default TrainingVideos;
