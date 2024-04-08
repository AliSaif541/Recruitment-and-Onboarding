import React from 'react';
import '../styles/MainBody.css';
import profilePicture from '../logos/thumbnail.jpeg'; // Import the image

function MainBody() {
  // Dummy data for video thumbnails
  const videos = [
    { id: 1, title: 'Video 1', description: 'Description for Video 1', thumbnail: profilePicture },
    { id: 2, title: 'Video 2', description: 'Description for Video 2', thumbnail: profilePicture },
    { id: 3, title: 'Video 3', description: 'Description for Video 3', thumbnail: profilePicture },
    { id: 4, title: 'Video 4', description: 'Description for Video 4', thumbnail: profilePicture },
    { id: 5, title: 'Video 5', description: 'Description for Video 5', thumbnail: profilePicture },
    { id: 6, title: 'Video 6', description: 'Description for Video 6', thumbnail: profilePicture },
    { id: 7, title: 'Video 7', description: 'Description for Video 7', thumbnail: profilePicture },
    { id: 8, title: 'Video 8', description: 'Description for Video 8', thumbnail: profilePicture },
    { id: 9, title: 'Video 9', description: 'Description for Video 9', thumbnail: profilePicture },
    // Add more video data as needed
  ];

  return (
    <div className="main-body">
      <div className="video-grid">
        {videos.map((video, index) => (
          <div key={video.id} className="video-box">
            <img src={video.thumbnail} alt={`Thumbnail for ${video.title}`} style={{ width: '192px', height: '108px' }} />
            <div className="video-info">
              <h2>{video.title}</h2>
              <p className="description">{video.description}</p>
              <button>Watch Video</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainBody;
