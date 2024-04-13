import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/Onboarding/PlayVideo.css';

function PlayVideo() {
  const hardcodedVideoId = '66156ab77a709db1da11f004'; // Hardcoded video ID

  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recommendedVideos, setRecommendedVideos] = useState([]);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/video', {
          params: {
            hardcodedVideoId: hardcodedVideoId
          }
        });
        setVideoData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching video data:', error);
        setLoading(false);
      }
    };

    const fetchRecommendedVideos = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/video/recommended', {
          params: {
            trainingModule: "Software Engineer"
          }
        });

        setRecommendedVideos(response.data);
      } catch (error) {
        console.error('Error fetching recommended videos:', error);
      }
    };

    fetchVideoData();
    fetchRecommendedVideos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className='play-videos-container'>
        <div className="video-main-content">
          <video controls className="video-player">
            <source src={videoData.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-info">
            <h2 className="video-title">{videoData.title}</h2>
            <div className="video-description">
              <p>{videoData.description}</p>
            </div>
          </div>
        </div>
        <div className="recommended-videos">
          {recommendedVideos.map((video) => (
            <div key={video.id} className="recommended-video">
              <img src={video.imageUrl} alt={video.title} className="recommended-thumbnail" />
              <div className="recommended-info">
                <p className="recommended-title">{video.title}</p>
                <p className="recommended-module">{video.trainingModule}</p>
                {/* <p className="recommended-description">{video.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PlayVideo;
