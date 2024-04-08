import React from 'react';
import '../styles/HRDashboard/UserProfile.css';
import Header from '../components/Header';
import UserBody from '../components/hrDashboard/UserBody';
import Footer from '../components/Footer';
import HRHeader from '../components/HRHeader';

function UserProfile({ currentApplicant }) {
  console.log("currentApplicant: ", currentApplicant);
  return (
    <div className='userprofile-container'>
      <HRHeader />
      <div className='user-body-container'>
        <UserBody currentApplicant={currentApplicant} />
      </div>
    <Footer />
    </div>
  );
}

export default UserProfile;
