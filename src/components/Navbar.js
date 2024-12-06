import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../images/logo.png"; // Import the image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" /> {/* Use the imported image */}
      </div>
      <ul className="nav-links">
        <li><Link to="/kalakari-website">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/achievements">Achievements</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
