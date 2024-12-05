import React, { useState } from "react";
import "../styles/Gallery.css";

const Gallery = () => {
  const galleryImages = [
    { id: 1, title: "Cultural Event 1", photo: "/images/i1.jpg" },
    { id: 2, title: "Cultural Event 2", photo: "/images/i2.jpg" },
    { id: 3, title: "Cultural Event 3", photo: "/images/i3.jpg" },
    { id: 4, title: "Cultural Event 4", photo: "/images/i4.jpg" },
    { id: 5, title: "Cultural Event 5", photo: "/images/i5.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const totalImages = galleryImages.length;

  const handleNext = () => {
    if (currentIndex < totalImages) {
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
    <div className="gallery-container">
      <h2>Gallery</h2>
      <div className="carousel">
        <div
          className="carousel-wrapper"
          style={{
            transform: `translateX(-${currentIndex * 320}px)`,
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {galleryImages.concat(galleryImages).map((image, index) => (
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

export default Gallery;
