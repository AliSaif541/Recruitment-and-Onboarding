import React from "react";
import logo from '../images/actual-logo.png'
import "../styles/NavigationSidebarExpanded.css";
import { Link } from "react-router-dom";

const NavigationSidebarExpanded = () => {
  return (
    <div className="sidebar">
      <div className="logo"><img src={logo} /></div>
      <div className="menu-item">
        <Link className="Link" to="/hr"><span>Dashboard</span></Link>
        <i className="fas fa-chart-bar"></i>
      </div>
      <div className="menu-item">
        <Link className="Link" to="/postajob"> <span>Post a Job</span></Link>
        <i className="fas fa-edit"></i>
      </div>
      <div className="menu-item">
        <Link className="Link" to="/candidates"> <span>Candidates</span></Link>
        <i className="fas fa-users"></i>
      </div>
    </div>
  );
};

export default NavigationSidebarExpanded;
