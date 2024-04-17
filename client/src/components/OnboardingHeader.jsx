import React from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "../styles/OnboardingHeader.css";
import logo from "../images/devsinc-logo.png"

const OnboardingHeader = ({ user, setUser}) => {
  const handleLogout = () => {
    setUser(null);
  };

  const handleClick = () => {
    window.location.href = "/onboarding";
	};

    return (
      <header className="header2-real">
        <div className="img-container2-real">
          <img className='logo-img-real' onClick={handleClick} src={logo} />
        </div>
        <div className="navbar1-real-onboarding">
          <Link className="Link" to="/onboarding"><div>Home</div></Link>
          <Link className="Link" to="/chatroom"><div>ChatRoom</div></Link>
          <Link className="Link" to="/training-modules"><div>Training Modules</div></Link>
          <Link className="Link" to="/leave-feedback"><div>Leave Feedback</div></Link>
          <button className="frame-b2-real">
            {user ? <Link className="Link" onClick={handleLogout} to="/login"><div className="sign-in2-real">Sign Out</div></Link> : <Link className="Link" to="/login"><div className="sign-in2-real">Sign in</div></Link>}
          </button>
        </div>
      </header>
    );
};

export default OnboardingHeader;