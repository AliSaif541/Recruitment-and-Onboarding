import React from "react";
import "../styles/HRHeader.css";
import logo from "../images/devsinc-logo.png"
import { Link } from "react-router-dom";


const HRHeader = () => {
    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

    return (
      <header className="header2-real">
        <div className="img-container2-real">
          <img className='logo-img-real' src={logo} />
        </div>
        <div className="navbar1-real-hr">
          <Link className="Link" to="/"><div>Home</div></Link>
          <Link className="Link" to="/postjob"><div>Post a Job</div></Link>
          <Link className="Link" to="/hr"><div>HR Dashboard</div></Link>
          <button onClick={handleLogout} className="frame-b2-real">
            <Link className="Link" to="/login"><div className="sign-in2-real">Sign Out</div></Link>
            {/* <div className="sign-in2-real">Sign in</div> */}
          </button>
        </div>
      </header>
    );
};

export default HRHeader;