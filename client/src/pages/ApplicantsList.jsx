import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import JobDetails from '../components/hrDashboard/JobDetails';
import '../styles/HRDashboard/ApplicantsList.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CandidateList from '../components/hrDashboard/CandidateList';
import HRHeader from "../components/HRHeader";

const ApplicantsList = ({currentJobPosting, setCurrentApplicant, user, setUser}) => {
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        getApplicants();
    }, []);

    const getApplicants = async (e) => {
        try {
            const url = "https://recruitment-and-onboarding-backend.vercel.app/api/jobApplicant";
            const response = await axios.get(url);
            const filteredArray = response.data.filter(item => item.jobID === currentJobPosting._id);
            setApplicants(filteredArray);
        } catch (error) {
            console.error("Error fetching Applicants:", error);
        }
    }

    
    return (
        <div className='applicant-list-container-x'>
            <HRHeader user={user} setUser={setUser} />
            <div className='job-details-container'>
            <JobDetails currentJobPosting={currentJobPosting} />
            </div>
            <div className='candidates-container'>
            <div className='cadidate-heading'>
                <div className='candidate-p'>Applied Candidates (Not called for Interview)</div>
                <div className='candidate-p'>Shortlisted Candidates (In order of Rating)</div>
                <div className='candidate-p'>Rejected Candidates</div>
            </div>
            <CandidateList applicants={applicants} setCurrentApplicant={setCurrentApplicant} />
            </div>
            <Footer />
        </div>
    );
};

export default ApplicantsList;