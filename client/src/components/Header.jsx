import React from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "../styles/Header.css";
import logo from "../images/devsinc-logo.png"

const Header = ({ user, setUser }) => {
  // const token = localStorage.getItem("token");
  // let user = null;
  // if (token) {
  //   user = jwtDecode(token);
  // }

  const handleLogout = () => {
    setUser(null);
		localStorage.removeItem("token");
	};

  const handleClick = () => {
    window.location.href = "/";
	};

    return (
      <header className="header2-real">
        <div className="img-container2-real">
          <img className='logo-img-real' onClick={handleClick} src={logo} />
        </div>
        <div className="navbar1-real">
          <Link className="Link" to="/"><div>Home</div></Link>
          <Link className="Link" to="/aboutus"><div>About</div></Link>
          <Link className="Link" to="/careers"><div>Career Page</div></Link>
          <Link className="Link" to="/contactus"><div>Contact Us</div></Link>
          <button className="frame-b2-real">
            {(user !== null) ? <Link className="Link" onClick={handleLogout} to="/login"><div className="sign-in2-real">Sign Out</div></Link> : <Link className="Link" to="/login"><div className="sign-in2-real">Sign in</div></Link>}
            {/* <div className="sign-in2-real">Sign in</div> */}
          </button>
        </div>
      </header>
    );
};

export default Header;