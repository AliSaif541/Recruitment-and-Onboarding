import { useState, useEffect } from 'react';
import axios from 'axios';
import JobHRComponent from '../components/jobHRComponent'
import ApplicantHRComponent from '../components/ApplicantHRComponent';

const HRDashboard = (prop) => {
    const [jobs, setJobs] = useState([]);
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        getJobs();
        getApplicants();
    }, []);

    const getJobs = async (e) => {
        const url = "http://localhost:9000/api/job";
        const response = await axios.get(url);
        setJobs(response.data);
        console.log(response.data);
    }

    const getApplicants = async (e) => {
        const url = "http://localhost:9000/api/jobApplicant";
        const response = await axios.get(url);
        setApplicants(response.data);
        console.log(response.data);
    }

    return (        
        <div>
           <h2>Current Job Openings:</h2>
           <div>{jobs.map((job, index) => (
                <JobHRComponent key={index} {...job} />
            ))}
            </div>
            <h2>Applicants:</h2>
            <div>{applicants.map((applicant, index) => (
                <ApplicantHRComponent key={index} {...applicant} />
                ))}
            </div>
        </div>
    )

}

export default HRDashboard