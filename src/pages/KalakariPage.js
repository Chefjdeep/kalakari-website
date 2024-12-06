import React, { useState, useEffect } from "react";
import "../styles/KalakariPage.css";

// Import images
import i1 from "../images/i1.jpg";
import i2 from "../images/i2.jpg";
import i3 from "../images/i3.jpg";
import i4 from "../images/i4.jpg";
import i5 from "../images/i5.jpg";
import nameLogo from "../images/name-logo.jpeg"; 
import i7 from "../images/i7.jpeg"

const KalakariPage = () => {
  const images = [i7, i1, i2, i3, i4, i5];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="page-container">
      <div className="background-section">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Background ${index + 1}`}
            className={`background-image ${
              index === currentImageIndex ? "active" : ""
            }`}
          />
        ))}
      </div>
      <div
        className="content-section"
        style={{
          backgroundImage: `url(${nameLogo})`, // Use the imported name-logo image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p>#संघर्ष आमची नियती</p>
        <h2>Welcome to the Kalakari Cultural Club</h2>
      </div>
    </div>
  );
};

export default KalakariPage;
