import React from 'react';
import homeLogo from '../images/home-logo.png'
import "../styles/FullTimeLabel.css";

const FullTimeLabel = () => {
  return (
    <section className="full-time-label-1">
      <div className="location-label-1">
        <div className="country-marker-icon-1">
          <div className="setup-label-1">
            <h1 className="join-our-team-container-1">
              <p className="join-our-team-1">Join our team and be a part of </p>
              <p className="devsinc1-1">Devsinc</p>
            </h1>
            <h1 className="lorem-ipsum-dolor-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Viverra a morbi ut donec in. Ac diam, at sed cras nisi.</h1>
          </div>
          <button className="hago-label-1">
            <div className="learn-more-1">Learn More</div>
            <img className="hago-label-child-1" alt="" src="/arrow-1.svg" />
          </button>
        </div>
      </div>
      <div className="contact-center-agent-text-1">
        <div className="legend-box-1"></div>
        <img
          className={homeLogo}
          loading="lazy"
          alt=""
          src="/businessanalyticsbro.svg"
        />
      </div>
    </section>
  );
}

export default FullTimeLabel;
