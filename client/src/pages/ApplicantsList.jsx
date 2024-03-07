import React from "react";
import "../styles/ApplicantsList.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import ApplicantsTable from "../components/ApplicantsTable";

const ApplicantsList = ({_id}) => {
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        getApplicants();
    }, []);

    const getApplicants = async (e) => {
        const url = "http://localhost:9000/api/jobApplicant";
        const response = await axios.get(url);
        setApplicants(response.data);
        console.log(response.data);
    }

    return (
      <div className="applicants-list-container">
        <Sidebar />
        <div className="current-applicants-div">
            <h2 className='current-applicants-h2'>Applicants:</h2>
            <ApplicantsTable applicants={applicants} />
        </div>
        {/* <div>{applicants.map((applicant, index) => (
            <ApplicantsTable key={index} {...applicant} />
            ))}
        </div> */}
      </div>
    );
};

export default ApplicantsList;