import React from 'react';
import '../styles/AboutUSHead.css';

const AboutUSHead = () => {
  return (
    <div className="section-frame">
      <div className="text4">
        <div className="benefit-cards-frame">
          <h1 className="about-us2">About Us</h1>
          <h1 className="devsinc-providing-the-container">
            <span>DEVSINC</span>
            <span className="providing-the-best">
              {" "}
              providing the best opportunities to the students around the globe.
            </span>
          </h1>
          <div className="devsinc-is-a-container">
            <span>DevSinc</span>
            <span className="is-a-uiux">
              , is a UI/UX Design Academy in Delhi involved in User Experience
              and User Interface Training and Consulting. It was started in 2023
              and passionate towards User Interface Design/ User Experience
              Design, Human Computer Interaction Design. Humanoid is gushing
              towards competence to acquire knowledge and have a wide
              understanding towards the sphere through the foremost courses in
              the area of UI/UX Design, by strengthening up your skills, for
              your golden future
            </span>
          </div>
          <button className="button2">
            <div className="contact-us3">Join Us</div>
            <img
              className="material-symbolsarrow-forward-icon"
              alt=""
              src="/materialsymbolsarrowforwardrounded.svg"
            />
          </button>
        </div>
      </div>
      <div className="frame-home-about-career-page-c">
        <div className="frame-features" />
        <img
          className="rectangle-image-b-g"
          loading="lazy"
          alt=""
          src="/rectangle-13@2x.png"
        />
        <img
          className="rectangle-image-b-g1"
          loading="lazy"
          alt=""
          src="/rectangle-14@2x.png"
        />
      </div>
    </div>
  );
};

export default AboutUSHead;
