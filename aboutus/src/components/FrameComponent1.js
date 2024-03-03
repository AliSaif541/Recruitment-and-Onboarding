import React from 'react';
import "../styles/FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <div className="material-symbolsmenu-rounded-parent">
      <img
        className="material-symbolsmenu-rounded-icon"
        loading="lazy"
        alt=""
        src="/materialsymbolsmenurounded.svg"
      />
      <div className="rectangle-container">
        <div className="frame-inner" />
        <div className="career-page">Career Page</div>
        <div className="contact-us1">Contact Us</div>
      </div>
      <div className="images-1-parent">
        <img className="images-1-icon" alt="" src="/images-1@2x.png" />
        <img className="images-2-icon" alt="" src="/images-2@2x.png" />
      </div>
    </div>
  );
};

export default FrameComponent1;