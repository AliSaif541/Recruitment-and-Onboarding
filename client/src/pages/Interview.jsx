import React from 'react';
import '../styles/Interview.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Interview() {
  return (
    <div className='interview-container'>
      <Header />
      <div className='interview-body-container'>
        <div className="interview-body">
          <h1 className="schedule-heading">Schedule Meeting</h1>
          <div className="interview-input-boxes">
            <div className="interview-box">
              <span className="interview-box-text">Month</span>
              <span className="interview-emoji">📅</span>
            </div>
            <div className="interview-box">
              <span className="interview-box-text">Date</span>
              <span className="interview-emoji">📅</span>
            </div>
            <div className="interview-box">
              <span className="interview-box-text">Year</span>
              <span className="interview-emoji">📅</span>
            </div>
          </div>
          <div className="interview-input-boxes">
            <div className="interview-time-box">
              <span className="interview-box-text">Time</span>
              <span className="interview-emoji">📅</span>
            </div>
          </div>
          <div className="interview-additional-info">
            <textarea
              className="interview-additional-textarea"
              placeholder="interview-Additional Note..."
            ></textarea>
          </div>
          <div className="interview-actions">
            <a href="/.." className="interview-cancel">Go back</a>
            <a href="/confirm-interview" className="confirm-interview">Confirm Interview</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Interview;
