import React, { useState, useEffect } from "react";
import "../styles/KalakariPage.css";

const KalakariPage = () => {
	const images = ["/images/i1.jpg", "/images/i2.jpg", "/images/i3.jpg", "/images/i4.jpg", "/images/i5.jpg"];

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
					backgroundImage: "url('/images/name-logo.jpeg')",
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
