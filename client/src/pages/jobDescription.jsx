import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

function JobDescription({ currentJob }) {
    const [jobApplicant, setJobApplicant] = useState({ 
        name: '', 
        email: '',
        contact_number: 0, 
        years_of_exp: -1, 
        cover_letter: '' ,
        education: ' ',
        experience: ' ',
        resume: null,
        jobID: currentJob._id,
    });

    const handleInputChange = (e) => {
        setJobApplicant({ ...jobApplicant, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setJobApplicant({ ...jobApplicant, resume: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(jobApplicant);

        const formData = new FormData();
        formData.append('name', jobApplicant.name);
        formData.append('email', jobApplicant.email);
        formData.append('contact_number', jobApplicant.contact_number);
        formData.append('years_of_exp', jobApplicant.years_of_exp);
        formData.append('cover_letter', jobApplicant.cover_letter);
        formData.append('education', jobApplicant.education);
        formData.append('experience', jobApplicant.experience);
        formData.append('resume', jobApplicant.resume);
        formData.append('jobID', jobApplicant.jobID);
            
        try {
            await axios.post('http://localhost:9000/api/jobApplicant', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
          console.log('Application Submitted successfully');
        } catch (error) {
          console.error('Error uploading data:', error);
        }
    };

    return (
        <div>
            <Header />
            <div className='Heading'>
                <h1>{currentJob.name}</h1>
                <h3>{currentJob.location}</h3>
            </div>
            <div className='Job-Description-Container'>
                <div className='SideBar-Container'>
                    <div>
                        <h3>Location</h3>
                        <h4>{currentJob.location}</h4>
                    </div>
                    <div>
                        <h3>Salary</h3>
                        <h4>{currentJob.salary}</h4>
                    </div>
                    <div>
                        <h3>Job Type</h3>
                        <h4>{currentJob.job_type}</h4>
                    </div>
                </div>
                <div className='Main-Description-Container'>
                    <h2>Description</h2>
                    <p>{currentJob.name}</p>
                    <p>{currentJob.company} - {currentJob.location}</p>
                    <p>{currentJob.description}</p>
                </div>
            </div>
            <div className='Form-Container'>
                <h2>Apply for this role</h2>
                <form onSubmit={handleSubmit}>
                    <input className="user-inp" type="text" placeholder="Full Name" name='name' onChange={handleInputChange} />
                    <input className="user-inp" type="text" placeholder="Email" name='email' onChange={handleInputChange} />
                    <input className="user-inp" type="text" placeholder="Contact Number" name='contact_number' onChange={handleInputChange} />
                    <input type="file" name="resume" accept=".pdf" onChange={handleFileChange} />
                    <input className="user-inp" type="text" placeholder="Cover Letter" name='cover_letter' onChange={handleInputChange} />
                    <button type="submit">Send Application</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default JobDescription;