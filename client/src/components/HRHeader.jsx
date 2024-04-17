import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import logo from "../images/devsinc-logo.png";
import "../styles/HRHeader.css";

const HRHeader = ({ user, setUser}) => {
  const [applicantAnchorEl, setApplicantAnchorEl] = useState(null);
  const [onboardingAnchorEl, setOnboardingAnchorEl] = useState(null);
  const [dashboardAnchorEl, setDashboardAnchorEl] = useState(null);

  const handleApplicantClick = (event) => {
    setApplicantAnchorEl(event.currentTarget);
  };

  const handleOnboardingClick = (event) => {
    setOnboardingAnchorEl(event.currentTarget);
  };

  const handleDashboardClick = (event) => {
    setDashboardAnchorEl(event.currentTarget);
  };

  const handleClose = (anchor) => {
    switch(anchor) {
      case 'applicant':
        setApplicantAnchorEl(null);
        break;
      case 'onboarding':
        setOnboardingAnchorEl(null);
        break;
      case 'dashboard':
        setDashboardAnchorEl(null);
        break;
      default:
        break;
    }
  };

  const handleLogout = () => {
    setUser(null);
    window.location.reload();
  };

  const handleClick = () => {
    window.location.href = "/hr";
	};

  return (
    <header className="header2-real">
      <div className="img-container2-real">
        <img className='logo-img-real' onClick={handleClick} src={logo} />
      </div>
      <div className="navbar1-real-hr">
        <Button
          id="applicant-fade-button"
          aria-controls={applicantAnchorEl ? 'applicant-fade-menu' : undefined}
          aria-haspopup="true"
          onClick={handleApplicantClick}
          style={{
            color: '#333',
            fontFamily: 'Actor',
            fontSize: '17px', 
            backgroundColor: 'inherit',
            textTransform: 'none',
          }}
        >
          Applicant
        </Button>
        <Menu
          id="applicant-fade-menu"
          anchorEl={applicantAnchorEl}
          open={Boolean(applicantAnchorEl)}
          onClose={() => handleClose('applicant')}
          TransitionComponent={Fade}
        >
          <Link className="Link" to="/"><MenuItem onClick={() => handleClose('applicant')}>Home Page</MenuItem></Link>
          <Link className="Link" to="/careers"><MenuItem onClick={() => handleClose('applicant')}>Careers Page</MenuItem></Link>
          <Link className="Link" to="/contactus"><MenuItem onClick={() => handleClose('applicant')}>Contact Us</MenuItem></Link>
        </Menu>

        <Button
          id="onboarding-fade-button"
          aria-controls={onboardingAnchorEl ? 'onboarding-fade-menu' : undefined}
          aria-haspopup="true"
          onClick={handleOnboardingClick}
          style={{
            color: '#333',
            fontFamily: 'Actor',
            fontSize: '17px', 
            backgroundColor: 'inherit',
            textTransform: 'none',
          }}
        >
          Onboarding
        </Button>
        <Menu
          id="onboarding-fade-menu"
          anchorEl={onboardingAnchorEl}
          open={Boolean(onboardingAnchorEl)}
          onClose={() => handleClose('onboarding')}
          TransitionComponent={Fade}
        >
          <Link className="Link" to="/hr-onboarding"><MenuItem onClick={() => handleClose('onboarding')}>Dashboard</MenuItem></Link>
          <Link className="Link" to="/chatroom"><MenuItem onClick={() => handleClose('onboarding')}>ChatRoom</MenuItem></Link>
          <Link className="Link" to="/approve-candidates"><MenuItem onClick={() => handleClose('onboarding')}>Verify Employees</MenuItem></Link>
          <Link className="Link" to="/view-feedback"><MenuItem onClick={() => handleClose('onboarding')}>View Feedback</MenuItem></Link>
          <Link className="Link" to="/upload-video"><MenuItem onClick={() => handleClose('onboarding')}>Upload Videos</MenuItem></Link>
        </Menu>

        <Button
          id="dashboard-fade-button"
          aria-controls={dashboardAnchorEl ? 'dashboard-fade-menu' : undefined}
          aria-haspopup="true"
          onClick={handleDashboardClick}
          style={{
            color: '#333',
            fontFamily: 'Actor',
            fontSize: '17px', 
            backgroundColor: 'inherit',
            textTransform: 'none',
          }}
        >
          HR Dashboard
        </Button>
        <Menu
          id="dashboard-fade-menu"
          anchorEl={dashboardAnchorEl}
          open={Boolean(dashboardAnchorEl)}
          onClose={() => handleClose('dashboard')}
          TransitionComponent={Fade}
        >
          <Link className="Link" to="/hr"><MenuItem onClick={() => handleClose('dashboard')}>Dashboard</MenuItem></Link>
          <Link className="Link" to="/postjob"><MenuItem onClick={() => handleClose('dashboard')}>Post A Job</MenuItem></Link>
        </Menu>

        <button onClick={handleLogout} className="frame-b2-real">
          <Link className="Link" to="/login"><div className="sign-in2-real">Sign Out</div></Link>
        </button>
      </div>
    </header>
  );
};

export default HRHeader;
