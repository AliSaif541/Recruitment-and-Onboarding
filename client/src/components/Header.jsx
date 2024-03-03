import React from "react";
import "../styles/Header.css";
import logo from "../images/devsinc-logo.png"

const Header = () => {
    return (
      <header className="header2">
        <div className="img-container2">
          <img className='logo-img' src={logo} />
        </div>
        <div className="navbar1">
          <div>Home</div>
          <div>About</div>
          <div>Career Page</div>
          <div>Contact Us</div>
          <button className="frame-b2">
            <div className="sign-in2">Sign in</div>
          </button>
        </div>
      </header>
    );
};

export default Header;