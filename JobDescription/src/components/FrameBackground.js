import React from 'react';
import "../styles/FrameBackground.css";

const FrameBackground = () => {
  return (
    <div className="frame-background">
      <div className="application-form">
        <div className="name-field">
          <div className="phone-number-field">
            <div className="frame-job-info">
              <div className="frame-location-job">
                <div className="full-name">Full Name</div>
                <div className="rectangle-input-name" />
              </div>
            </div>
            <div className="frame-phone-number">
              <div className="phone-number">Contact Number</div>
              <div className="frame-email-address" />
            </div>
            <div className="cover-letter">Cover Letter</div>
          </div>
          <div className="frame-choose-file">
            <div className="text-job-title">
              <div className="email">Email</div>
              <div className="frame-salary-info" />
            </div>
            <div className="group-references">
              <div className="upload-your-resume">Upload your Resume</div>
              <div className="rectangle-parent1">
                <div className="frame-child3" />
                <div className="choose-file">Choose File</div>
              </div>
            </div>
          </div>
        </div>
        <div className="rectangle-footer-background" />
      </div>
      <button className="group-button">
        <div className="frame-child4" />
        <div className="send-application">Send Application</div>
        <img
          className="material-symbolsarrow-forward-icon1"
          alt=""
          src="/materialsymbolsarrowforward-1.svg"
        />
      </button>
    </div>
  );
};

export default FrameBackground;
