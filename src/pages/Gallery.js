import React, { useState } from "react";
import "../styles/Gallery.css";

// Import images
import i1 from "../images/i1.jpg";
import i2 from "../images/i2.jpg";
import i3 from "../images/i3.jpg";
import i4 from "../images/i4.jpg";
import i5 from "../images/i5.jpg";
import Firo from "../components/Firo";

const Gallery = () => {
	const galleryImages = [
		{ id: 1, title: "Cultural Event 1", photo: i1 },
		{ id: 2, title: "Cultural Event 2", photo: i2 },
		{ id: 3, title: "Cultural Event 3", photo: i3 },
		{ id: 4, title: "Cultural Event 4", photo: i4 },
		{ id: 5, title: "Cultural Event 5", photo: i5 },
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(true);
	const totalImages = galleryImages.length;

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
		<div className="gallery-container">
			<div>
				<Firo />
			</div>
			<h2>Other</h2>
			<div className="Gcarousel">
				<div
					className="Gcarousel-wrapper"
					style={{
						transform: `translateX(-${currentIndex * 320}px)`,
						transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
					}}
					onTransitionEnd={handleTransitionEnd}
				>
					{galleryImages.concat(galleryImages).map((image, index) => (
						<div className="Gcarousel-slide" key={index}>
							<img src={image.photo} alt={image.title} className="Gimage" />
							<p className="Gimage-title">{image.title}</p>
						</div>
					))}
				</div>
			</div>
			<button onClick={handlePrev} className="Gcarousel-button left">
				←
			</button>
			<button onClick={handleNext} className="Gcarousel-button right">
				→
			</button>
		</div>
	);
};

export default Gallery;
