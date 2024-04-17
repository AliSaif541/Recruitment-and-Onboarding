import React from 'react';
import axios from 'axios';
import '../../styles/HRDashboard/JobDetails.css';

function JobDetails({ currentJobPosting }) {
  const handleCompleteJob = async () => {
    try {
      await axios.post('https://recruitment-and-onboarding-backend.vercel.app/api/job/active', { _id: currentJobPosting._id, active: 'completed' });
    } catch (error) {
      console.error('Error completing job:', error);
    }
  };

  const handleArchiveJob = async () => {
    try {
      await axios.post('https://recruitment-and-onboarding-backend.vercel.app/api/job/active', { _id: currentJobPosting._id, active: 'in-active' });
    } catch (error) {
      console.error('Error archiving job:', error);
    }
  };

  return (
    <div className="JobDetails-body">
      <div className="demand-box">
        <div className='Job-Heading-div'>
          <h1 className="Job-heading">{currentJobPosting.name}</h1>
          <div className="Job-buttons">
            <button className="archive-job-btn" onClick={handleArchiveJob}>Archive Job</button>
            <button className="complete-job-btn" onClick={handleCompleteJob}>Complete Job</button>
          </div>
        </div>
        <p className="Job-description">Our company {currentJobPosting.company} is looking for a {currentJobPosting.name} to take over.</p>
        <div className='Job-requirements'>Requirements:
          <ul>
            {currentJobPosting.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>
        <div className="Job-skills">
          <h3>Skills - </h3>
          {currentJobPosting.skillsNeeded.map((skill, index) => (
            <div key={index} className="Job-skill-item">{skill}</div>
          ))}
        </div>
        <div className="Job-additional-info">
          <p className="Job-info-text">
            <span className="Job-segment">Location - {currentJobPosting.location}</span>
            <span className="Job-segment-type">Type - {currentJobPosting.job_type}</span>
            <span className="Job-salary">Salary - {currentJobPosting.salary}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
