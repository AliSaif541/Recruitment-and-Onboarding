import React, { useState } from 'react';
import '../styles/HRDashboard/Interview.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import HRHeader from '../components/HRHeader';


function Interview({ currentApplicant, currentJobPosting }) {
  const [dateTime, setDateTime] = useState('');
  const [time, setTime] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');

  const handleScheduleInterview = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:9000/api/jobApplicant/Interview', {
        recipient: currentApplicant.email,
        jobID: currentApplicant.jobID,
        date: dateTime,
        time: time,
        note: note
      });

      setError(response.data);      

    } catch (error) {
      console.error('Error sending email:', error);
      setError('Error sending email. Please try again later.');
    }
  };

  return (
    <div className='interview-container'>
      <HRHeader />
      <div className='interview-body-container'>
        <div className="interview-body">
          <h1 className="schedule-heading">Schedule Meeting with {currentApplicant.name}</h1>
          <form onSubmit={handleScheduleInterview}>
            <div className="interview-input-boxes">
              <p>Enter the date of the interview: </p>
              <input
                type="date"
                className="interview-box"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
              />
            </div>
            <div className="interview-input-boxes">
              <p>Enter the time of the interview: </p>
              <input
                type="time"
                className="interview-box"
                placeholder="Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="interview-additional-info">
              <p>Enter any additional stuff that u want to convey to the candidate about the nature of the interview: </p>
              <textarea
                className="interview-additional-textarea"
                placeholder="Interview Additional Note..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              ></textarea>
            </div>
            <div className="interview-actions">
              <button type="submit" className="confirm-interview">Confirm Interview</button>
            </div>
            <div className='setError-div'>
              <p>{error}</p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Interview;
