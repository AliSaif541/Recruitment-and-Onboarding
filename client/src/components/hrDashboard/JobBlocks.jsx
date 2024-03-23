import React from 'react';
import '../../styles/HRDashboard/JobBlocks.css';
import figmaLogo from '../../images/figmaLogo.png';
import { Link } from "react-router-dom";

function JobBlocks({ _id, name, company, benefits, skillsNeeded, requirements, salary, location, job_type, description, index, setCurrentJobPosting }) {
  const handleClick = () => {
    setCurrentJobPosting({
      _id,
      name,
      company,
      benefits,
      salary,
      location,
      job_type,
      skillsNeeded,
      requirements,
      description
    });
  };
  
  return (
    <div className="job-blocks-container">
      <div className="job-blocks-box">
        <div className="job-blocks-header">
          <img src={figmaLogo} alt="job-blocks-Instagram"/>
          <Link className="Link" onClick={handleClick} to={`/hrjob/${index}`}> <p className="job-blocks-title">{name}</p></Link>
        </div>
        <p className="job-blocks-subtext">Posted 3 days ago</p>
        <div className="job-blocks-content">
          <p className="job-blocks-c1">📍 {location}</p>
        </div>
        <div className="job-blocks-additional-info">
          <p className="job-blocks-applications"><span>42</span> applications</p>
        </div>
      </div>
    </div>
  );
}

export default JobBlocks;