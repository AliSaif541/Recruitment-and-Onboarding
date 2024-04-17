import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/HRDashboard/HRDashboard.css';
import JobBlocks from '../components/hrDashboard/JobBlocks';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HRHeader from '../components/HRHeader';
import Briefcase from '../images/briefcase.svg';
import { Link } from 'react-router-dom';

const HRDashboard = ({ setCurrentJobPosting, setCurrentApplicant, user, setUser }) => {
    const [jobs, setJobs] = useState([]);
    const [activeJobs, setActiveJobs] = useState([]);
    const [nonActiveJobs, setNonActiveJobs] = useState([]);
    const [completedJobs, setCompletedJobs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        getJobs();
    }, []);

    useEffect(() => {
        filterJobs(jobs);
    }, [jobs, searchQuery]);

    const getJobs = async () => {
        const url = "https://recruitment-and-onboarding-backend.vercel.app/api/job";
        try {
            const response = await axios.get(url);
            setJobs(response.data);
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    }

    const filterJobs = (jobs) => {
        const filteredActiveJobs = jobs.filter(job => job.active === 'active');
        const filteredNonActiveJobs = jobs.filter(job => job.active === 'in-active');
        const filteredCompletedJobs = jobs.filter(job => job.active === 'completed');

        const filteredActive = filteredActiveJobs.filter(job => job.name.toLowerCase().includes(searchQuery.toLowerCase()));
        const filteredNonActive = filteredNonActiveJobs.filter(job => job.name.toLowerCase().includes(searchQuery.toLowerCase()));
        const filteredCompleted = filteredCompletedJobs.filter(job => job.name.toLowerCase().includes(searchQuery.toLowerCase()));

        setActiveJobs(filteredActive);
        setNonActiveJobs(filteredNonActive);
        setCompletedJobs(filteredCompleted);
    }

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    }

    return (
        <div className='HR-Dashboard'>
            <HRHeader user={user} setUser={setUser} />
            <h1 className='hr-dashboard-h1'>Current Jobs Posted</h1>
            <div className='hr-dashboard-container'>
                <div className="main-hr-dashboard">
                    <div className="header-hr-dashboard">
                        <div className="search-bar-hr-dashboard">
                            <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearchChange} />
                            <button><i className="fas fa-search-hr-dashboard"></i></button>
                        </div>
                        <Link to='/postjob'><button className="add-job-btn-hr-dashboard">Add New Job</button></Link>
                    </div>
                    <div className="vertical-boxes-hr-dashboard">
                        <div className="box">
                            <div className="status-text-hr-dashboard">Active Jobs</div>
                            <div className="nested-boxes-hr-dashboard">
                                {activeJobs.map((job, index) => (
                                    <JobBlocks key={index} {...job} index={index} setCurrentJobPosting={setCurrentJobPosting} setCurrentApplicant={setCurrentApplicant} />
                                ))}
                            </div>
                        </div>
                        <div className="box">
                            <div className="status-dot red-dot-hr-dashboard"></div>
                            <div className="status-text-hr-dashboard">Archived Jobs</div>
                            <div className="nested-boxes-hr-dashboard">
                                {nonActiveJobs.map((job, index) => (
                                    <JobBlocks key={index} {...job} index={index} setCurrentJobPosting={setCurrentJobPosting} setCurrentApplicant={setCurrentApplicant} />
                                ))}
                            </div>
                        </div>
                        <div className="box">
                            <div className="status-dot green-dot-hr-dashboard"></div>
                            <div className="status-text-hr-dashboard">Completed Jobs</div>
                            <div className="nested-boxes-hr-dashboard">
                                {completedJobs.map((job, index) => (
                                    <JobBlocks key={index} {...job} index={index} setCurrentJobPosting={setCurrentJobPosting} setCurrentApplicant={setCurrentApplicant} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HRDashboard;
