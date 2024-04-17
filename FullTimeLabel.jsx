import React from 'react';
import homeLogo from '../../images/home-logo.png'
import "../../styles/CareersPage/FullTimeLabel.css";
import presentingchart from "../../images/Presentingchart.png"
import arrow from "../../images/arrow.png"

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
            <h1 className="lorem-ipsum-dolor-1">Welcome to Devsinc, where talent flourishes. Join our team and become an integral part of our mission to revolutionize the industry. At Devsinc, we prioritize creativity, collaboration, and growth. Discover endless opportunities to expand your skills and make a meaningful impact. Together, let's shape the future of technology.</h1>
          </div>
          <button className="hago-label-1">
            <div className="learn-more-1">Learn More</div>
            <img className="hago-label-child-1" alt="Learn More Arrow" src={arrow}/>
          </button>
        </div>
      </div>
      <div className="contact-center-agent-text-1">
        <div className="legend-box-1"></div>
        <img
          className="home-logo-image"
          loading="lazy"
          alt="Presenting Chart"
          src={presentingchart}
        />
      </div>
    </section>
  );
}

export default FullTimeLabel;
