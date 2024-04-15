import React, { useState } from 'react';
import '../../styles/HRDashboard/CandidateList.css';
import { Link } from 'react-router-dom';

function CandidateList({ applicants, setCurrentApplicant }) {
  const handleClick = (applicant) => {
    setCurrentApplicant({
      _id: applicant._id,
      name: applicant.name,
      email: applicant.email,
      contact_number: applicant.contact_number,
      gender: applicant.gender,
      city: applicant.city,
      GitHub: applicant.GitHub,
      LinkedIn: applicant.LinkedIn,
      years_of_exp: applicant.years_of_exp,
      cover_letter: applicant.cover_letter,
      education: applicant.education,
      experience: applicant.experience,
      skills: applicant.skills,
      resume: applicant.resume,
      rating: applicant.rating,
      stage: applicant.stage,
      jobID: applicant.jobID,
    });
  };

  const applicantsByStatus = {
    applicant: applicants
      .filter(applicant => applicant.stage === "applicant")
      .sort((a, b) => b.rating - a.rating),
    interview: applicants
      .filter(applicant => applicant.stage === "interview")
      .sort((a, b) => b.rating - a.rating),
    rejected: applicants
      .filter(applicant => applicant.stage === "rejected")
      .sort((a, b) => b.rating - a.rating),
  };

  return (
    <div className="candidates-list">
      <div className='applicant-list'>
        {applicantsByStatus.applicant.map((applicant, index) => (
          <div key={`${'applicant'}-${index}`} className="candidates-list-box">
            <div className="candidate-info">
              <Link className="Link" to={`/user/${index}`}>
                <h3 onClick={() => handleClick(applicant)} className="candidate-name">{applicant.name}</h3>
              </Link>
              <p className="candidate-description">
                {applicant.cover_letter.length > 100 ? `${applicant.cover_letter.substring(0, 100)}` : applicant.cover_letter}
                <Link className='Link' to={`/user/${index}`}>
                  <span onClick={() => handleClick(applicant)}>...See more</span>
                </Link>
              </p>
              <p className="candidate-location">
                <span className="location-label">Location - </span>
                <span className="location-value">{applicant.city}</span>
                <span className="type-label"> Rating - </span>
                <span className="type-value">{` ${applicant.rating.toFixed(2)}`}</span>
              </p>
              <hr className="divider" />
              <div className="skills-candidate">
                <h3>Skills:</h3>
                {applicant.skills.slice(0, 6).map((skill, index) => (
                  <div key={index} className="skill-item-candidate">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='interview-list'>
        {applicantsByStatus.interview.map((applicant, index) => (
          <div key={`${'interview'}-${index}`} className="candidates-list-box">
            <div className="candidate-info">
              <Link className="Link" to={`/user/${index}`}>
                <h3 onClick={() => handleClick(applicant)} className="candidate-name">{applicant.name}</h3>
              </Link>
              <p className="candidate-description">
                {applicant.cover_letter.length > 100 ? `${applicant.cover_letter.substring(0, 100)}` : applicant.cover_letter}
                <Link className='Link' to={`/user/${index}`}>
                  <span onClick={() => handleClick(applicant)}>...See more</span>
                </Link>
              </p>
              <p className="candidate-location">
                <span className="location-label">Location - </span>
                <span className="location-value">{applicant.city}</span>
                <span className="type-label"> Rating - </span>
                <span className="type-value">{` `}{applicant.rating}</span>
              </p>
              <hr className="divider" />
              <div className="skills-candidate">
                <h3>Skills:</h3>
                {applicant.skills.slice(0, 6).map((skill, index) => (
                  <div key={index} className="skill-item-candidate">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='rejected-list'>
        {applicantsByStatus.rejected.map((applicant, index) => (
          <div key={`${'rejected'}-${index}`} className="candidates-list-box">
            <div className="candidate-info">
              <Link className="Link" to={`/user/${index}`}>
                <h3 onClick={() => handleClick(applicant)} className="candidate-name">{applicant.name}</h3>
              </Link>
              <p className="candidate-description">
                {applicant.cover_letter.length > 100 ? `${applicant.cover_letter.substring(0, 100)}` : applicant.cover_letter}
                <Link className='Link' to={`/user/${index}`}>
                  <span onClick={() => handleClick(applicant)}>...See more</span>
                </Link>
              </p>
              <p className="candidate-location">
                <span className="location-label">Location - </span>
                <span className="location-value">{applicant.city}</span>
                <span className="type-label"> Rating - </span>
                <span className="type-value">{` `}{applicant.rating}</span>
              </p>
              <hr className="divider" />
              <div className="skills-candidate">
                <h3>Skills:</h3>
                {applicant.skills.slice(0, 6).map((skill, index) => (
                  <div key={index} className="skill-item-candidate">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default CandidateList;
