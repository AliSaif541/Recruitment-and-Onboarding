import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


function JobCard({ _id, name, company, salary, location, job_type, description, index, setCurrentJob }) {
  const handleClick = () => {
    setCurrentJob([_id, name, company, salary, location, job_type, description]);
  };
  
  return (
    <div>
      <div>{name}</div>
      <div>{job_type}</div>
      <div>{description}</div>
      <Link to={`/job/${index}`}  >
        <button onClick={handleClick}>Apply Now</button>    
      </Link>
    </div>
  );
}

export default JobCard;