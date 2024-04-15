import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../../styles/CareersPage/jobCard.css'

function JobCard({ _id, name, company, salary, location, job_type, description, skillsNeeded, benefits, requirements, index, setCurrentJob }) {
  const handleClick = () => {
    setCurrentJob({
      _id,
      name,
      company,
      salary,
      location,
      job_type,
      description,
      skillsNeeded,
      benefits,
      requirements
    });
  };
  
  return (
    <div>
      <div className="box-jp">
        <p className="title-jp">{name}</p>
        <p className="subtext-jp"><span className='span-jb'>{job_type}</span> · <span className='span-jb'>{location}</span></p>
        <p className="content-jp">{description.substring(0, 150) + "..."}</p>
        <div className="buttonsjb">
          <Link to={`/job/${index}`}  >
            <button onClick={handleClick} className="apply-buttonjb">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobCard;