import React from 'react';
import JobDetails from '../components/JobDetails';
import '../styles/Testing.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CandidateList from '../components/CandidateList';

function Testing() {
  return (
    <div className='applicant-list-container'>
      <Header />
      <div className='job-details-container'>
        <JobDetails />
      </div>
      <div className='candidates-container'>
        <div className='cadidate-heading'>
          <div className='candidate-p'>Applied Candidates</div>
          <div className='candidate-p'>Shortlisted Candidates</div>
          <div className='candidate-p'>Interviews</div>
        </div>
        <CandidateList />
      </div>
      <Footer />
    </div>
  );
}

export default Testing;
