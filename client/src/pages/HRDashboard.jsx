import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import '../styles/HRDashboard/HRDashboard.css'
import JobBlocks from '../components/hrDashboard/JobBlocks';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HRDashboard = ({ setCurrentJobPosting, setCurrentApplicant }) => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getJobs();
    }, []);

    const getJobs = async (e) => {
        const url = "http://localhost:9000/api/job";
        const response = await axios.get(url);
        setJobs(response.data);
        // console.log(response.data);
    }

    return (        
        <div className='HR-Dashboard'>
            {/* <Sidebar /> */}
            <Header />
            <div className='HR-Dashboard-Container'>
                <h2 className='current-openings-h2'>Current Openings</h2>
                <div className="hr-contact-frame">
                    <div className="hr-time-legend">
                    {jobs.map((job, index) => (
                        <JobBlocks key={index} {...job} index={index} setCurrentJobPosting={setCurrentJobPosting} setCurrentApplicant={setCurrentApplicant} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HRDashboard