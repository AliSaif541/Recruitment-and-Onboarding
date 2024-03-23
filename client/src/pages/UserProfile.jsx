import React from 'react';
import '../styles/UserProfile.css';
import Header from '../components/Header';
import UserBody from '../components/UserBody';
import Footer from '../components/Footer';

function UserProfile() {
  return (
    <div className='userprofile-container'>
      <Header />
      <div className='user-body-container'>
        <UserBody />
      </div>
    <Footer />
    </div>
  );
}

export default UserProfile;
