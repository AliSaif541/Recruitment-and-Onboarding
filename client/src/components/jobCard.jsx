import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../styles/jobCard.css'

function JobCard({ _id, name, company, salary, location, job_type, description, index, setCurrentJob }) {
  const handleClick = () => {
    setCurrentJob({
      _id,
      name,
      company,
      salary,
      location,
      job_type,
      description
    });
  };
  
  return (
    <div>
      <div className="box-jp">
        <p className="title-jp">{name}</p>
        <p className="subtext-jp"><span className='span-jb'>{job_type}</span> · <span className='span-jb'>{location}</span></p>
        <p className="content-jp">We are looking for Contact Center Agents that will be the liaison between Transparent BPO's clients and their current and potential customers. The successful candidates ...</p>
        <div className="additional-info-jp">
          <p className="salary-jp"><span className='span-jb'>2K</span>/month</p>
          <p className="posted-time-jp">5hr ago</p>
        </div>
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