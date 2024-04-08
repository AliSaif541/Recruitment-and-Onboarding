import React from "react";
import "../styles/Header.css";
import logo from "../images/devsinc-logo.png"
import { Link } from "react-router-dom";


const Header = () => {
    return (
      <header className="header2-real">
        <div className="img-container2-real">
          <img className='logo-img-real' src={logo} />
        </div>
        <div className="navbar1-real">
          <Link className="Link" to="/"><div>Home</div></Link>
          <Link className="Link" to="/aboutus"><div>About</div></Link>
          <Link className="Link" to="/careers"><div>Career Page</div></Link>
          <Link className="Link" to="/contactus"><div>Contact Us</div></Link>
          <button className="frame-b2-real">
            <Link className="Link" to="/login"><div className="sign-in2-real">Sign in</div></Link>
            {/* <div className="sign-in2-real">Sign in</div> */}
          </button>
        </div>
      </header>
    );
};

export default Header;