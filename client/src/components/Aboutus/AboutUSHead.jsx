import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Aboutus/AboutUSHead.css';
import hallwayImage from '../../images/hallway.jpg';
import laptopwork from "../../images/laptopwork.jpg";
import arrow from "../../images/arrow.png";

const AboutUSHead = () => {
  const navigate = useNavigate(); // Hook to navigate

  const handleJoinUsClick = () => {
    navigate('/careers'); // Function to navigate to the Careers page
  };

  return (
    <div className="section-frame-ab">
      <div className="text4-ab">
        <div className="benefit-cards-frame-ab">
          <h1 className="about-us2-ab">About Us</h1>
          <h1 className="devsinc-providing-the-container-ab">
            <span className="providing-the-best-ab">
              <span className="omar-text">DEVSINC</span> providing the best opportunities to people around the globe.
            </span>
          </h1>
          <div className="devsinc-is-a-container-ab">
            <span className="is-a-uiux-ab">
              <span className="omar-text">DevSinc</span> helps companies deliver innovative technology solutions to power their growth by unlocking access to passionate and experienced engineers and solution providers. While Devsinc has been growing in a tech landscape for more than a decade, I recognize the challenges businesses face in managing digital systems. As the world transforms into a global village, our vision goes beyond. We aim to reimagine IT solutions into smart, agile, and AI-enhanced digital assets.
            </span>
          </div>
          <button className="button2-ab" onClick={handleJoinUsClick}>
            <div className="contact-us3-ab">Join Us</div>
            <img
              className="material-symbolsarrow-forward-icon-ab"
              alt="Go to Careers Page"
              src={arrow}
            />
          </button>
        </div>
      </div>
      <div className="frame-home-about-career-page-c-ab">
        <div className="frame-features-ab" />
        <img
          className="rectangle-image-b-g-ab"
          loading="lazy"
          alt="Work on laptop"
          src={laptopwork}
        />
        <img
          className="rectangle-image-b-g1-ab"
          loading="lazy"
          alt="Hallway"
          src={hallwayImage}
        />
      </div>
    </div>
  );
};

export default AboutUSHead;
