import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/PostAJob.css";
import { useState } from 'react';
import axios from 'axios';
import Header from "../components/Header";
import Footer from "../components/Footer";

const PostAJob = () => {
  const [jobPosting, setJobPosting] = useState({ 
    name: '', 
    company: '',
    salary: '', 
    benefits: [], // New field
    job_type: '', 
    location: '',
    skillsNeeded: [], // New field
    requirements: [], // New field
    description: '',
    active: 'active'
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setJobPosting({ ...jobPosting, [e.target.name]: e.target.value });
  };

  const handleBenefitChange = (e, index) => {
    const newBenefits = [...jobPosting.benefits];
    newBenefits[index] = e.target.value;
    setJobPosting({ ...jobPosting, benefits: newBenefits });
  };
  
  const handleAddBenefit = () => {
    setJobPosting({
      ...jobPosting,
      benefits: [...jobPosting.benefits, '']
    });
  };
  
  const handleRequirementChange = (e, index) => {
    const newRequirements = [...jobPosting.requirements];
    newRequirements[index] = e.target.value;
    setJobPosting({ ...jobPosting, requirements: newRequirements });
  };
  
  const handleAddRequirement = () => {
    setJobPosting({
      ...jobPosting,
      requirements: [...jobPosting.requirements, '']
    });
  };

  const handleSkillChange = (e, index) => {
    const newSkills = [...jobPosting.skillsNeeded];
    newSkills[index] = e.target.value;
    setJobPosting({ ...jobPosting, skillsNeeded: newSkills });
  };
  
  const handleAddSkill = () => {
    setJobPosting({
      ...jobPosting,
      skillsNeeded: [...jobPosting.skillsNeeded, '']
    });
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
      {/* <Sidebar />  */}
      <Header />
      <div className="Post-a-Job-Container">
        <form className="Post-a-Job-Form" onSubmit={handleSubmit}>
        <div>
            <div className="Post-a-Job-h1">Post a Job</div>
            <div className="Post-a-Job-input-div">
              <input className="paj-user-inp" type="text" placeholder="Name" name='name' onChange={handleInputChange} required />
              <input className="paj-user-inp" type="text" placeholder="Company" name='company' onChange={handleInputChange} required />
              <input className="paj-user-inp" type="number" placeholder="Salary" name='salary' onChange={handleInputChange} required />
              <input className="paj-user-inp" type="text" placeholder="Location" name='location' onChange={handleInputChange} required />
              <input className="paj-user-inp-cv" type="text" placeholder="Description" name='description' onChange={handleInputChange} required />
              {jobPosting.benefits.map((benefit, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder="Benefit"
                    value={benefit}
                    onChange={(e) => handleBenefitChange(e, index)}
                    required
                  />
                </div>
              ))}
              <button type="button" onClick={handleAddBenefit}>Add Benefit</button>

              {jobPosting.requirements.map((requirement, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder="Requirement"
                    value={requirement}
                    onChange={(e) => handleRequirementChange(e, index)}
                    required
                  />
                </div>
              ))}
              <button type="button" onClick={handleAddRequirement}>Add Requirement</button>

              {jobPosting.skillsNeeded.map((skill, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder="Skill"
                    value={skill}
                    onChange={(e) => handleSkillChange(e, index)}
                    required
                  />
                </div>
              ))}
              <button type="button" onClick={handleAddSkill}>Add Skill</button>
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
                <input className='particles-checkbox' type="radio" name="job_type" value="Hybrid, Permanent" checked={jobPosting.job_type === 'Hybrid, Permanent'} onChange={handleInputChange} />
                <span className="radio-btn-text">Hybrid, Permanent</span>
              </label>
              <label className="particles-checkbox-container">
                <input className='particles-checkbox' type="radio" name="job_type" value="Online, Permanent" checked={jobPosting.job_type === 'Online, Permanent'} onChange={handleInputChange} />
                <span className="radio-btn-text">Online, Permanent</span>
              </label>
              <label className="particles-checkbox-container">
                <input className='particles-checkbox' type="radio" name="job_type" value="Online, Part-Time" checked={jobPosting.job_type === 'Online, Part-Time'} onChange={handleInputChange} />
                <span className="radio-btn-text">Online, Part-Time</span>
              </label>
              <label className="particles-checkbox-container">
                <input className='particles-checkbox' type="radio" name="job_type" value="Hybrid, Part-Time" checked={jobPosting.job_type === 'Hybrid, Part-Time'} onChange={handleInputChange} />
                <span className="radio-btn-text">Hybrid, Part-Time</span>
              </label>
              <label className="particles-checkbox-container">
                <input className='particles-checkbox' type="radio" name="job_type" value="In Person, Part-Time" checked={jobPosting.job_type === 'In Person, Part-Time'} onChange={handleInputChange} />
                <span className="radio-btn-text">In Person, Part-Time</span>
              </label>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PostAJob;
