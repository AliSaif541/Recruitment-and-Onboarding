import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobForm from "../components/JobForm";
import "../styles/Job.css";

function JobDescription({ currentJob }) {
  console.log("currentJob", currentJob);
  if (!currentJob) {
    return <div>Loading job details...</div>; 
  }
  
  const formatSalary = (salary) => {
    return typeof salary === 'number' ? `₨ ${salary.toLocaleString()}` : salary;
  };

  return (
    <div className="job">
      <Header />
      <div className='JobDesHeading'>
        <h1 className="Heading-Name">{currentJob.name || 'Job Title'}</h1>
        <h3 className="Heading-Location">{currentJob.location || 'Location'}</h3>
      </div>
      <div className="DescriptionContainer">
        <div className="left-column">
          <section className="detail">
            <h2 className="detail-title">Location</h2>
            <div className="detail-line"></div>
            <p className="detail-text">{currentJob.location || 'Location not specified'}</p>
          </section>
          <section className="detail">
            <h2 className="detail-title">Salary</h2>
            <div className="detail-line"></div>
            <p className="detail-text">{formatSalary(currentJob.salary) || 'Salary not specified'}</p>
          </section>
          <section className="detail">
            <h2 className="detail-title">Job Type</h2>
            <div className="detail-line"></div>
            <p className="detail-text">{currentJob.job_type || 'Job type not specified'}</p>
          </section>
          {currentJob.benefits && (
            <>
              <div className="detail-line"></div>
              <section className="detail">
                <h2 className="detail-title">Benefits</h2>
                {currentJob.benefits.map((benefit, index) => (
                  <p key={index} className="detail-text">{benefit}</p>
                ))}
              </section>
            </>
          )}
          {currentJob.requirements && (
            <>
              <div className="detail-line"></div>
              <section className="detail">
                <h2 className="detail-title">Requirements</h2>
                {currentJob.requirements.map((requirement, index) => (
                  <p key={index} className="detail-text">{requirement}</p>
                ))}
              </section>
            </>
          )}
          {currentJob.skillsNeeded && (
            <>
              <div className="detail-line"></div>
              <section className="detail">
                <h2 className="detail-title">Skills Needed</h2>
                {currentJob.skillsNeeded.map((skill, index) => (
                  <p key={index} className="detail-text">{skill}</p>
                ))}
              </section>
            </>
          )}
        </div>
        <div className="right-column">
          <section className="detail">
            <h2 className="detail-title">Description</h2>
            <p className="detail-text">{currentJob.description || 'No description available'}</p>
          </section>
        </div>
      </div>
      <JobForm currentJob={currentJob} />
      <Footer />
    </div>
  );
}

export default JobDescription;