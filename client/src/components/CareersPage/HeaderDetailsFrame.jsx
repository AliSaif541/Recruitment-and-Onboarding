import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../../styles/CareersPage/HeaderDetailsFrame.css";
import JobCard from "./jobCard";

const HeaderDetailsFrame = ({ setCurrentJob }) => {
  const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getJobs()
    }, []);

    const getJobs = async (e) => {
        const url = "https://recruitment-and-onboarding-backend.vercel.app/api/job";
        const response = await axios.get(url);
        setJobs(response.data.filter(job => job.active !== "completed"));
    }

  return (
    <section className="header-details-frame">
      <div className="standard-button">
        <h1 className="latest-openings">Latest Openings</h1>
      </div>
      <div className="contact-frame">
        <div className="time-legend">
          {jobs.map((job, index) => (
              <JobCard key={index} {...job} index={index} setCurrentJob={setCurrentJob} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default HeaderDetailsFrame;