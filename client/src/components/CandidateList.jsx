import React, { useState } from 'react';
import '../styles/CandidateList.css';

function CandidateList({ applicants, setCurrentApplicant }) {
  const [showMore, setShowMore] = useState(false);
  console.log("applicants: ", applicants);

  const toggleDescription = () => {
    setShowMore(!showMore);
  };

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

  return (
    <div className="candidates-list">
      {applicants.map((applicant, index) => (
        <div key={index} className="candidates-list-box">
          {/* <img src={applicant.image} alt={`Candidate ${index + 1}`} className="candidate-image" /> */}
          <div className="candidate-info">
            <h3 className="candidate-name">{applicant.name}</h3>
            <p className="candidate-description">
              {showMore
                ? applicant.cover_letter
                : `${applicant.cover_letter.substring(0, 100)}...`}
              <span onClick={toggleDescription} className="see-more">
                {showMore ? '...See less' : '...See more'}
              </span>
            </p>
            <p className="candidate-location">
              <span className="location-label">Location - </span>
              <span className="location-value">{applicant.city}</span>
              <span className="type-label"> Email - </span>
              <span className="type-value">{applicant.email}</span>
            </p>
            <hr className="divider" />
            <div className="skills-candidate">
              <h3>Skills:</h3>
              {applicant.skills.map((skill, index) => (
                <div key={index} className="skill-item-candidate">{skill}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CandidateList;
