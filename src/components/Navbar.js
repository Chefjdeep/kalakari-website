import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../styles/Navbar.css";
import logo from "../images/logo.png"; // Import the image

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="logo">
				<img src={logo} alt="logo" /> {/* Use the imported image */}
			</div>
			<ul className="nav-links">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/achievements">Achievements</Link>
				</li>
				<li>
					<Link to="/gallery">Gallery</Link>
				</li>
			</ul>
			<div className="social-icons">
				<a
					href="https://www.instagram.com/kalakariofficial/profilecard/?igsh=anB6YjF6eTk0aGpx"
					target="_blank"
					rel="noopener noreferrer"
					className="floating-instagram"
				>
					<FontAwesomeIcon icon={faInstagram} size="2x" />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
