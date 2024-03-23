import React from 'react';
import '../styles/JobDetails.css';

function JobDetails({ currentJobPosting }) {
    console.log("currentJobPosting: ", currentJobPosting);
  return (
    <div className="JobDetails-body">
      <div className="demand-box">
        <h1 className="Job-heading">{currentJobPosting.name}</h1>
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
            <span className="Job-segment">Type - {currentJobPosting.job_type}</span>
            <span className="Job-salary">Salary - {currentJobPosting.salary}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
