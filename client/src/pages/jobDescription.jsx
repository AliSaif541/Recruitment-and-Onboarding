import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

function JobDescription({ currentJob }) {

    return (
        <div>
            <Header />
            <div>{currentJob.name}</div>
            <div>{currentJob.job_type}</div>
            <div>{currentJob.description}</div>
            <Footer />
        </div>
    );
}

export default JobDescription;