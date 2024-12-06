import React, { useState } from "react";
import "../styles/Firo.css";


import firo1 from "../images/i1.jpg";
import firo2 from "../images/i2.jpg";
import firo3 from "../images/i3.jpg";
import firo4 from "../images/i4.jpg";
import firo5 from "../images/i5.jpg";

const Firo = () => {
  const firoImages = [
    { id: 1, title: "Firodiya Moment 1", photo: firo1 },
    { id: 2, title: "Firodiya Moment 2", photo: firo2 },
    { id: 3, title: "Firodiya Moment 3", photo: firo3 },
    { id: 4, title: "Firodiya Moment 4", photo: firo4 },
    { id: 5, title: "Firodiya Moment 5", photo: firo5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const totalImages = firoImages.length;

  const handleNext = () => {
    if (currentIndex < totalImages - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsTransitioning(false);
      setCurrentIndex(0);
      setTimeout(() => setIsTransitioning(true), 0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setIsTransitioning(false);
      setCurrentIndex(totalImages - 1); // Jump to the last image
      setTimeout(() => setIsTransitioning(true), 0); // Restore transition
    }
  };

  const handleTransitionEnd = () => {
    if (currentIndex === totalImages) {
      setIsTransitioning(false);
      setCurrentIndex(0);
      setTimeout(() => setIsTransitioning(true), 0);
    } else if (currentIndex < 0) {
      setIsTransitioning(false);
      setCurrentIndex(totalImages - 1);
      setTimeout(() => setIsTransitioning(true), 0);
    }
  };

  return (
    <div className="firo-container">
      <h2>Firodiya Karandak</h2>
      <div className="carousel">
        <div
          className="carousel-wrapper"
          style={{
            transform: `translateX(-${currentIndex * 320}px)`,
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {firoImages.concat(firoImages).map((image, index) => (
            <div className="carousel-slide" key={index}>
              <img src={image.photo} alt={image.title} className="image" />
              <p className="image-title">{image.title}</p>
            </div>
          ))}
        </div>
      </div>
      <button onClick={handlePrev} className="carousel-button left">
        ←
      </button>
      <button onClick={handleNext} className="carousel-button right">
        →
      </button>
    </div>
  );
};

export default Firo;
