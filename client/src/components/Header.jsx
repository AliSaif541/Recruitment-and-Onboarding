import React from "react";
import "../styles/Header.css";
import logo from "../images/devsinc-logo.png"

const Header = () => {
    return (
      <header className="header">
        <div className="img-container">
          <img src={logo} />
        </div>
        <div className="navbar">
          <div>Home</div>
          <div>About</div>
          <div>Career Page</div>
          <div>Contact Us</div>
          <button className="frame-b">
            <div className="sign-in">Sign in</div>
          </button>
        </div>
      </header>
    );
};

export default Header;