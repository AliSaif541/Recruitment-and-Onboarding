import React, { useState } from 'react';
import firebase from "firebase/compat/app";
import 'firebase/compat/storage';
import axios from 'axios';
import "../styles/jobForm.css"

const JobForm = ({ currentJob }) => {
  const [jobApplicant, setJobApplicant] = useState({
    name: '',
    email: '',
    contact_number: '',
    gender: '',
    city: '',
    GitHub: '',
    LinkedIn: '',
    years_of_exp: '',
    cover_letter: '',
    education: [
      { institution: '', degree: '', location: '', graduationYear: '', gpa: '' }
    ],
    experience: [
      { title: '', company: '', from: '', to: '', rolesResponsibilities: '' }
    ],
    skills: [],
    resume: '',
    rating: '0',
    stage: 'applicant',
    jobID: currentJob._id,
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobApplicant({ ...jobApplicant, [name]: value });
  };

  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = [...jobApplicant.education];
    updatedEducation[index][name] = value;
    setJobApplicant({ ...jobApplicant, education: updatedEducation });
  };

  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperience = [...jobApplicant.experience];
    updatedExperience[index][name] = value;
    setJobApplicant({ ...jobApplicant, experience: updatedExperience });
  };

  const handleFileChange = async (e) => {
    // console.log("Hello");
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    // console.log("Uploading file ");
    setError("Uploading Resume");
    try {
      fileRef.put(file).then(() => {
        fileRef.getDownloadURL().then(url => {
          console.log("Resume url: " + url);
          setError("Resume Uploaded");
          setJobApplicant({ ...jobApplicant, resume: url });
        });
      });
    } catch (error) {
      console.error('Error uploading resume:', error);
      setError('Error uploading resume');
    }
  };

  const handleAddEducation = () => {
    setJobApplicant({
      ...jobApplicant,
      education: [
        ...jobApplicant.education,
        { institution: '', degree: '', location: '', graduationYear: '', gpa: '' }
      ]
    });
  };

  const handleAddExperience = () => {
    setJobApplicant({
      ...jobApplicant,
      experience: [
        ...jobApplicant.experience,
        { title: '', company: '', from: '', to: '', rolesResponsibilities: '' }
      ]
    });
  };

  const handleSkillChange = (e, index) => {
    const newSkills = [...jobApplicant.skills];
    newSkills[index] = e.target.value;
    setJobApplicant({ ...jobApplicant, skills: newSkills });
  };

  const handleAddSkill = () => {
    setJobApplicant({
      ...jobApplicant,
      skills: [...jobApplicant.skills, '']
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(jobApplicant);
      await axios.post('https://recruitment-and-onboarding-backend.vercel.app/api/jobApplicant', jobApplicant);
      setError('Application Submitted successfully');
    } catch (error) {
      console.error('Error uploading data:', error);
      setError('Error submitting application');
    }
  };

  return (
    <div className="job-form-container">
      <h2 className="apply-role-title">Apply for this role</h2>
      <form onSubmit={handleSubmit}>
      <div className="input-pair-section">
        <input type="text" placeholder="Full Name" name='name' onChange={handleInputChange} required />
        <input type="text" placeholder="Gender" name='gender' onChange={handleInputChange} />
      </div>
      <div className="input-pair-section">
        <input type="text" placeholder="Contact Number" name='contact_number' onChange={handleInputChange} required />
        <input type="text" placeholder="Email" name='email' onChange={handleInputChange} required />
      </div>
      <div className="input-pair-section">
        <input type="text" placeholder="City" name='city' onChange={handleInputChange} />
        <input type="number" placeholder="Years of Experience" name='years_of_exp' onChange={handleInputChange} required />
        
      </div>
      <div className="input-pair-section">
        <input type="text" placeholder="LinkedIn" name='LinkedIn' onChange={handleInputChange} />
        <input type="text" placeholder="GitHub" name='GitHub' onChange={handleInputChange} />
        </div>
        <input type="text" placeholder="Cover Letter" name='cover_letter' onChange={handleInputChange} required />
        <input type="file" name="resume" accept=".pdf" onChange={handleFileChange} required />

        {jobApplicant.education.map((edu, index) => (
          <div key={index} className="section-with-button">
            <input type="text" placeholder="Institution" name="institution" value={edu.institution} onChange={(e) => handleEducationChange(e, index)} required />
            <input type="text" placeholder="Degree" name="degree" value={edu.degree} onChange={(e) => handleEducationChange(e, index)} required />
            <input type="text" placeholder="Location" name="location" value={edu.location} onChange={(e) => handleEducationChange(e, index)} required />
            <input type="text" placeholder="Graduation Year" name="graduationYear" value={edu.graduationYear} onChange={(e) => handleEducationChange(e, index)} required />
            <input type="text" placeholder="GPA" name="gpa" value={edu.gpa} onChange={(e) => handleEducationChange(e, index)} required />
          </div>
        ))}
        <div className="button-container">
        <button type="button"  className="add-btn" onClick={handleAddEducation}>Add Education</button>
        </div>

        {jobApplicant.experience.map((exp, index) => (
          <div key={index} className="section-with-button">
            <input type="text" placeholder="Title" name="title" value={exp.title} onChange={(e) => handleExperienceChange(e, index)} required />
            <input type="text" placeholder="Company" name="company" value={exp.company} onChange={(e) => handleExperienceChange(e, index)} required />
            <input type="text" placeholder="Roles and Responsibilities" name="rolesResponsibilities" value={exp.rolesResponsibilities} onChange={(e) => handleExperienceChange(e, index)} required />
            <input type="date" placeholder="From" name="from" value={exp.from} onChange={(e) => handleExperienceChange(e, index)} required />
            <input type="date" placeholder="To" name="to" value={exp.to} onChange={(e) => handleExperienceChange(e, index)} required />
          </div>
        ))}
        <div className="button-container">
        <button type="button"  className="add-btn" onClick={handleAddExperience}>Add Experience</button>
        </div>
        {jobApplicant.skills.map((skill, index) => (
          <div key={index} className="section-with-button">
            <input
              type="text"
              placeholder="Skill"
              value={skill}
              onChange={(e) => handleSkillChange(e, index)}
              required
            />
          </div>
        ))}
        <div className="button-container">
        <button type="button"  className="add-btn" onClick={handleAddSkill}>Add Skill</button>
        </div>
        <button type="submit">Send Application</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default JobForm;