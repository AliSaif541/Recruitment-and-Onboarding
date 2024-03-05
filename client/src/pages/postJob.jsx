import React from "react";
import NavigationSidebarExpanded from "../components/NavigationSidebarExpanded";
import "../styles/PostAJob.css";
import { useState } from 'react';
import axios from 'axios';

const PostAJob = () => {
  const [jobPosting, setJobPosting] = useState({ 
    name: '', 
    company: '',
    salary: '', 
    job_type: '', 
    location: '' ,
    description: '',
});
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
      setJobPosting({ ...jobPosting, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          await axios.post('http://localhost:9000/api/job/jobPosting', jobPosting);
        console.log('Job Posted successfully');
        setError('Job Posted successfully');
      } catch (error) {
        setError(error);
        console.error('Error uploading data:', error);
      }
  }

  return (
    <div className="Post-a-Job">
      <NavigationSidebarExpanded /> 
      <div className="Post-a-Job-Container">
        <form className="Post-a-Job-Form" onSubmit={handleSubmit}>
          <div>
            <div className="Post-a-Job-h1">Post a Job</div>
            <div className="Post-a-Job-input-div">
              <input className="paj-user-inp" type="text" placeholder="Name" name='name' onChange={handleInputChange} required />
              <input className="paj-user-inp" type="text" placeholder="Company" name='company' onChange={handleInputChange} required />
              <input className="paj-user-inp" type="text" placeholder="Salary" name='salary' onChange={handleInputChange} required />
              <input className="paj-user-inp" type="text" placeholder="Location" name='location' onChange={handleInputChange} required />
              <input className="paj-user-inp-cv" type="text" placeholder="Description" name='description' onChange={handleInputChange} required />
              <button className='login-btn-1' type="submit">Send Application</button>
              {error && <div className="custom-error">{error}</div>}
            </div>
          </div>
          <div className="Post-a-Job-radio-div">
            <div className="radio-h1">Job Type:</div>
            <div className="job-type-radio">
              <label className="particles-checkbox-container">
                <input className='particles-checkbox' type="radio" name="job_type" value="In Person, Permanent" checked={jobPosting.job_type === 'In Person, Permanent'} onChange={handleInputChange} />
                <span className="radio-btn-text">In Person, Permanent</span>
              </label>
              <label className="particles-checkbox-container">
                <input className='particles-checkbox' type="radio" name="job_type" value="Hybrid, Permanent" checked={jobPosting.job_type === 'In Person, Permanent'} onChange={handleInputChange} />
                <span className="radio-btn-text">Hybrid, Permanent</span>
              </label>
              <label className="particles-checkbox-container">
                <input className='particles-checkbox' type="radio" name="job_type" value=">Online, Permanent" checked={jobPosting.job_type === 'In Person, Permanent'} onChange={handleInputChange} />
                <span className="radio-btn-text">Online, Permanent</span>
              </label>
              <label className="particles-checkbox-container">
                <input className='particles-checkbox' type="radio" name="job_type" value="Online, Part-Time" checked={jobPosting.job_type === 'In Person, Permanent'} onChange={handleInputChange} />
                <span className="radio-btn-text">Online, Part-Time</span>
              </label>
              <label className="particles-checkbox-container">
                <input className='particles-checkbox' type="radio" name="job_type" value="Hybrid, Part-Time" checked={jobPosting.job_type === 'In Person, Permanent'} onChange={handleInputChange} />
                <span className="radio-btn-text">Hybrid, Part-Time</span>
              </label>
              <label className="particles-checkbox-container">
                <input className='particles-checkbox' type="radio" name="job_type" value="In Person, Part-Time" checked={jobPosting.job_type === 'In Person, Permanent'} onChange={handleInputChange} />
                <span className="radio-btn-text">In Person, Part-Time</span>
              </label>
            </div>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default PostAJob;
