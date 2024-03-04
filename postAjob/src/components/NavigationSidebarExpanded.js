import React from "react";
import "../styles/NavigationSidebarExpanded.css";

const NavigationSidebarExpanded = () => {
  return (
    <div className="navigationsidebarexpanded">
      <div className="bg" />
      <div className="navigation-sidebar-expande">
        <img className="image-1-icon1" alt="" src="/image-1@2x.png" />
        <img
          className="iconnavigationhamburger"
          alt=""
          src="/iconnavigationhamburger.svg"
        />
      </div>
      <div className="project-05">
        <div className="link">IOTASK project update</div>
        <div className="line">
          <div className="mask" />
          <div className="uifillsblue">
            <div className="rectangle-copy" />
          </div>
        </div>
      </div>
      <div className="project-04">
        <div className="link1">IOTASK content creation</div>
        <div className="line1">
          <div className="mask1" />
          <div className="uifillsblue1">
            <div className="rectangle-copy1" />
          </div>
        </div>
      </div>
      <img className="separator-icon" alt="" src="/separator.svg" />
      <img
        className="navigationsidebarexpanded-child"
        alt=""
        src="/line-3.svg"
      />
      <div className="navigation">
        <img className="dashboard-icon" alt="" src="/dashboard.svg" />
        <div className="badgecounterinfolight">
          <div className="background" />
          <div className="background1" />
          <b className="b">2</b>
        </div>
        <div className="link2">DASHBOARD</div>
      </div>
      <div className="navigation1">
        <img className="jobs-icon" alt="" src="/jobs.svg" />
        <div className="badgecounterinfolight1">
          <div className="background2" />
          <div className="background3" />
          <b className="b1">2</b>
        </div>
        <div className="link3">POST JOB</div>
      </div>
      <button className="navigation2">
        <img className="internship-icon" alt="" src="/internship.svg" />
        <div className="badgecounterinfolight2">
          <div className="background4" />
          <div className="background5" />
          <b className="b2">2</b>
        </div>
        <div className="link4">Candidates</div>
      </button>
    </div>
  );
};

export default NavigationSidebarExpanded;
