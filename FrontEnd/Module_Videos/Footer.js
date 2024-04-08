import React from 'react';
import '../styles/Footer.css'; // Assuming you have a separate CSS file for styling the footer
import actualLogo from '../logos/actual-logo.png';

function Footer() {
  return (
    <div className="footer">
      <img src={actualLogo} alt="Actual Logo" className="footer-logo" />
      <p className="footer-text">© 2021 All Rights Reserved to Hire karma | Version 0.1</p>
    </div>
  );
}

export default Footer;
