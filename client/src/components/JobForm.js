import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/jobForm.css"

const JobForm = ({ currentJob }) => {
  const [jobApplicant, setJobApplicant] = useState({ 
    name: '', 
    email: '',
    contact_number: 0, 
    years_of_exp: -1, 
    cover_letter: '' ,
    education: ' ',
    experience: ' ',
    resume: null,
    jobID: currentJob._id,
  });

  const handleInputChange = (e) => {
      setJobApplicant({ ...jobApplicant, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
      setJobApplicant({ ...jobApplicant, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();

      console.log(jobApplicant);

      const formData = new FormData();
      formData.append('name', jobApplicant.name);
      formData.append('email', jobApplicant.email);
      formData.append('contact_number', jobApplicant.contact_number);
      formData.append('years_of_exp', jobApplicant.years_of_exp);
      formData.append('cover_letter', jobApplicant.cover_letter);
      formData.append('education', jobApplicant.education);
      formData.append('experience', jobApplicant.experience);
      formData.append('resume', jobApplicant.resume);
      formData.append('jobID', jobApplicant.jobID);
          
      try {
          await axios.post('http://localhost:9000/api/jobApplicant', formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
          });
        console.log('Application Submitted successfully');
      } catch (error) {
        console.error('Error uploading data:', error);
      }
  };

  return (
    <div className='Form-Container-Apply'>
      <h2 className='Apply'>Apply for this role</h2>
      <form  onSubmit={handleSubmit}>
        <div className='Apply-Form'>
          <input className="user-inp" type="text" placeholder="Full Name" name='name' onChange={handleInputChange} required />
          <input className="user-inp" type="text" placeholder="Email" name='email' onChange={handleInputChange} required />
          <input className="user-inp" type="text" placeholder="Contact Number" name='contact_number' onChange={handleInputChange} required />
          <input type="file" name="resume" accept=".pdf" onChange={handleFileChange} required />
        </div>
        <div className='Apply-Form-2'>
          <input className="user-inp" type="text" placeholder="Cover Letter" name='cover_letter' onChange={handleInputChange} required />
          <button className='Submit-JD-Btn' type="submit">Send Application</button>
        </div>
      </form>
  </div>
  );
};

export default JobForm;
