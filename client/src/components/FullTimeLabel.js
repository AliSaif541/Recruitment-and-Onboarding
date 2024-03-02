import React from 'react';
import "../styles/FullTimeLabel.css";

const FullTimeLabel = () => {
  return (
    <section className="full-time-label">
      <div className="location-label">
        <div className="country-marker-icon">
          <div className="setup-label">
            <h1 className="join-our-team-container">
              <p className="join-our-team">Join our team and be a part of </p>
              <p className="devsinc1">Devsinc</p>
            </h1>
            <h1 className="lorem-ipsum-dolor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Viverra a morbi ut donec in. Ac diam, at sed cras nisi.</h1>
          </div>
          <button className="hago-label">
            <div className="learn-more">Learn More</div>
            <img className="hago-label-child" alt="" src="/arrow-1.svg" />
          </button>
        </div>
      </div>
      <div className="contact-center-agent-text">
        <div className="legend-box"></div>
        <img
          className="business-analyticsbro-icon"
          loading="lazy"
          alt=""
          src="/businessanalyticsbro.svg"
        />
      </div>
    </section>
  );
}

export default FullTimeLabel;
