import React, { useState, useEffect } from "react";
import "../styles/About.css";

import i3 from "../images/i3.jpg";
import k1 from "../images/k1.png";
import photo from "../images/Photo.jpeg";
import musicHeads from "../images/music-heads.png";
import prnv from "../images/prnv.png"
import gvrv from "../images/gvrv.png"

const About = () => {
  const [opacity, setOpacity] = useState(1);

  const team = [
    { id: 1, name: "Kapeesh Rathod", designation: "Co-ordinator", photo: k1, contact: null },
    { id: 2, name: "Jaydeep Tayshete", designation: "Documentation Head", photo: photo },
    // { id: 3, name: "Devdatt Sonkusare", designation: "Documentation Head", photo: team3 },
    { id: 4, name: "Nishad Hiwrekar & Devdatt Sonkusare", designation: "Music Heads", photo: musicHeads, contact: null },
    { id: 5, name: "Angel Londhe", designation: "Dance Head", photo: null },
    { id: 6, name: "Nirja Sartale", designation: "Dance Head", photo: null },
    { id: 7, name: "Omkar Koli", designation: "Media Team", photo: null , contact: "9307486599" },
    { id: 8, name: "Pranav Divekar", designation: "Backstage/Event Management", photo: prnv, contact: null },
    { id: 9, name: "Gaurav Gore", designation: "Discipline Head", photo: gvrv, contact: null },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight;
      const fadeEffect = Math.max(1 - scrollTop / maxScroll, 0);
      setOpacity(fadeEffect);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="about-container">
      {/* Upper Image Section with dynamic opacity */}
      <div className="about-image" style={{ opacity: opacity }}>
        <img src={i3} alt="About Banner" className="about-banner" />
      </div>

      {/* About Content */}
      <div className="about-content">
        <h1>Our Team</h1>
        <p>Meet the creative minds behind Kalakari Cultural Club!</p>

        {/* Team Members */}
        <div className="team-members">
          {team.map((member) => (
            <div
              className={`team-member ${member.id === 4 ? 'special-member' : ''}`} 
              key={member.id}
            >
              <img
                src={member.photo}
                alt={member.name}
                className="team-photo"
              />
              <p className="team-name">{member.name}</p>
              <p className="team-role">{member.designation}</p>
              {/* {member.contact && <p className="team-contact">Contact: {member.contact}</p>} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
