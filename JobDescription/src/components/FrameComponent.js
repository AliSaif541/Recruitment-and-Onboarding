import React from 'react';
import "../styles/FrameComponent.css";

const FrameComponent = () => {
  return (
    <header className="material-symbolsmenu-rounded-parent">
      <img
        className="material-symbolsmenu-rounded-icon"
        loading="lazy"
        alt=""
        src="/materialsymbolsmenurounded.svg"
      />
      <div className="logo-symbols-frame">
        <div className="logo-symbols-frame-child"></div>
        <div className="home">Home</div>
        <div className="about">About</div>
        <div className="career-page">Career Page</div>
        <div className="contact-us">Contact Us</div>
      </div>
      <img className="images-1-icon" alt="" src="/images-1@2x.png" />
    </header>
  );
};

export default FrameComponent;
