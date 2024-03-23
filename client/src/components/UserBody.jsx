import React from 'react';
import '../styles/UserBody.css';


function UserBody() {
  return (
    <div className="box">
        <div className="profile-info">
            <h2>Candidate Name</h2>
        </div>
        <div className="location">
            <div className="location-item">
                <span>Gender</span>
                <span>Male</span>
            </div>
            <div className="location-item">
                <span>City</span>
                <span>Lahore</span>
            </div>
            <div className="location-item">
                <span>Number</span>
                <span>03060540005</span>
            </div>
        </div>
        <div className="text-box-container">
            <div className="text-box">
                <h3 className="text-box-header">Past Experience</h3>
                <p className="text-box-title">Title: Web Designer</p>
                <p>Company: Devsinc</p>
                <p><span>From: 01/01/2024</span>  <span>To: 01/01/2024</span></p>
                <p>Roles and Responsibilities: </p>
                <p className="text-box-title">Title: Web Designer</p>
                <p>Company: Devsinc</p>
                <p><span>From: 01/01/2024</span>  <span>To: 01/01/2024</span></p>
                <p>Roles and Responsibilities: </p>
                <h3 className="text-box-header">Education</h3>
                <p className="text-box-title">Title: Web Designer</p>
                <p>Company: Devsinc</p>
                <p><span>From: 01/01/2024</span>  <span>To: 01/01/2024</span></p>
                <p>Roles and Responsibilities: </p>
                <p className="text-box-title">Title: Web Designer</p>
                <p>Company: Devsinc</p>
                <p><span>From: 01/01/2024</span>  <span>To: 01/01/2024</span></p>
                <p>Roles and Responsibilities: </p>
            </div>
        </div>
        <div className="skills">
            <h3 className="text-box-header">Skills</h3>
            <div className="skill-item">Skill 1</div>
            <div className="skill-item">Skill 2</div>
            <div className="skill-item">Skill 3</div>
        {/* Add more skill items as needed */}
        </div>
        <div className="candidate-note">
            <h3 className="text-box-header">Cover Letter</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et magna nec justo ultrices imperdiet.</p>
        </div>
        <div className="actions">
            <a href="/resume" className="see-resume">See Resume</a>
            <a href="/schedule-interview" className="schedule-interview">Schedule Interview</a>
        </div>
    </div>
  );
}

export default UserBody;
