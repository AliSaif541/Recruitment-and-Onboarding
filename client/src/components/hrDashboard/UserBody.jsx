import React from 'react';
import '../../styles/HRDashboard/UserBody.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


function UserBody({ currentApplicant }) {
    const viewResume = () => {
        const binaryData = atob(currentApplicant.resume);
        const arrayBuffer = new ArrayBuffer(binaryData.length);
        const byteArray = new Uint8Array(arrayBuffer);
        for (let i = 0; i < binaryData.length; i++) {
            byteArray[i] = binaryData.charCodeAt(i);
        }
        const blob = new Blob([arrayBuffer], { type: 'application/pdf' });

        const url = URL.createObjectURL(blob);

        window.open(url, '_blank');
    };

    const handleRejection = async () => {
        const url = "http://localhost:9000/api/jobApplicant/reject";

        const postData = {
            email: currentApplicant.email,
            stage: "Rejected",
            jobID: currentApplicant.jobID
        }
        const { data: res } = await axios.post(url, postData);
    };

    return (
        <div className="box">
            <div className="profile-info">
                <h2>{currentApplicant.name}</h2>
            </div>
            <div className="location">
                <div className="location-item">
                    <span>Gender</span>
                    <span>{currentApplicant.gender}</span>
                </div>
                <div className="location-item">
                    <span>City</span>
                    <span>{currentApplicant.city}</span>
                </div>
                <div className="location-item">
                    <span>Number</span>
                    <span>{currentApplicant.contact_number}</span>
                </div>
            </div>
            <div className="text-box-container">
                <div className="text-box">
                    <h3 className="text-box-header">Past Experience</h3>
                    {currentApplicant.experience.map((exp, index) => (
                        <div className="div-map" key={index}>
                            <p className="text-box-title">Title: {exp.title}</p>
                            <p>Company: {exp.company}</p>
                            <p>From: {exp.from}</p>
                            <p>To: {exp.to}</p>
                            <p>Roles and Responsibilities: {exp.rolesResponsibilities}</p>
                        </div>
                    ))}
                    <h3 className="text-box-header">Education</h3>
                    {currentApplicant.education.map((edu, index) => (
                        <div className="div-map" key={index}>
                            <p className="text-box-title">Degree: {edu.degree}</p>
                            <p>Institution: {edu.institution}</p>
                            <p>Location: {edu.location}</p>
                            <p>Graduation Year: {edu.graduationYear}</p>
                            <p>GPA: {edu.gpa}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="skills">
                <h3 className="text-box-header">Skills</h3>
                {currentApplicant.skills.map((skill, index) => (
                    <div className="skill-item" key={index}>{skill}</div>
                ))}
            </div>
            <div className="candidate-note">
                <h3 className="text-box-header">Cover Letter</h3>
                <p>{currentApplicant.cover_letter}</p>
            </div>
            <div className='resume-container'>
                <h3 className="text-box-header">Resume</h3>
                <div className='resume-div'>
                    <p onClick={viewResume} className="see-resume">See Resume</p>
                </div>
            </div>
            <div className="actions">
                <button onClick={handleRejection} className="schedule-interview">Reject Candidate</button>
                <Link className="Link" to={`/interview`}><button className="schedule-interview">Schedule Interview</button></Link>
            </div>
        </div>
    );
}

export default UserBody;
