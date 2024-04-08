import React from 'react';
import '../styles/Header.css'; // Assuming you have a separate CSS file for styling the header
import notificationIcon from '../logos/notificationIcon.png';
import profilePicture from '../logos/profilePicture.png';

function Header() {
  return (
    <div className="header">
      <h1 className="dashboard-text">Dashboard</h1>
      <div className="header-icons">
        <img src={notificationIcon} alt="Notification Icon" className="notification-icon" />
        <img src={profilePicture} alt="Profile Picture" className="profile-icon" />
      </div>
    </div>
  );
}

export default Header;