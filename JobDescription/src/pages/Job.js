import React from 'react';
import FrameComponent from "../components/FrameComponent";
import DescriptionFrame from "../components/DescriptionFrame";
import FrameBackground from "../components/FrameBackground";
import "../styles/Job.css";

const Job = () => {
  return (
    <div className="job">
      <div className="recruit">Recruit.</div>
      <div className="rectangle-parent">
        <div className="frame-child"></div>
        <img
          className="material-symbolsarrow-forward-icon"
          alt=""
          src="/materialsymbolsarrowforward.svg"
        />
      </div>
      <FrameComponent />
      <div className="job-child"></div>
      <section className="background-frame">
        <div className="image-1-parent">
          <img className="image-1-icon" alt="" src="/image-1@2x.png" />
          <div className="frame-item"></div>
          <h1 className="frontend-developer">Frontend developer</h1>
          <h2 className="manchester-uk">Manchester, UK</h2>
        </div>
      </section>
      <section className="main-group-frame">
        <div className="apply-button-frame">
          <DescriptionFrame />
          <FrameBackground />
        </div>
      </section>
      <footer className="company-footer">
        <div className="rectangle-group">
          <div className="frame-inner"></div>
          <div className="devsinc">Devsinc</div>
          <div className="company-2022">
            Company , 2022 © All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Job;
