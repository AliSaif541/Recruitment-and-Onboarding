import React from 'react';
import '../../styles/HRDashboard/JobBlocks.css';
import figmaLogo from '../../images/figmaLogo.png';
import { Link } from "react-router-dom";
import Briefcase from '../../images/briefcase.svg';


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
    <div className="nested-boxes-hr-dashboard">
      <div className="nested-box-hr-dashboard">
          <div className='nested-box-heading'>
              <img className='briefcase' src={Briefcase}/>
              <div>
              <Link className="Link" onClick={handleClick} to={`/hrjob/${index}`}><h2 className='h2-hr-dashboard'>{name}</h2></Link>
                  <p className='p-hr-dashboard'>{company}</p>
              </div>
          </div>
          <div className="small-boxes-hr-dashboard">
              {skillsNeeded.slice(0, 4).map((skill, index) => (
                <div key={index} className="small-box-hr-dashboard">{skill}</div>
              ))}
          </div>
          <div className="location-info-hr-dashboard">
              <span>📍 {location}</span>
              <span className="salary-info-hr-dashboard">{salary}/Month</span>
          </div>
      </div>
    </div>
  );
}

export default JobBlocks;