import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobForm from "../components/JobForm";
import "../styles/Job.css";
import DescriptionFrame from '../components/DescriptionFrame';

function JobDescription({ currentJob }) {
    return (
        <div className="job">
            <Header />
            <div className='JobDesHeading'>
                <h1 className="Heading-Name">Frontend developer</h1>
                <h3 className="Heading-Location">Manchester, UK</h3>
            </div>
            <DescriptionFrame currentJob={currentJob} />
            <JobForm currentJob={currentJob} />
            <Footer />
        </div>
    );
}

export default JobDescription;