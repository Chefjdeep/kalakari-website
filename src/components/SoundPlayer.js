import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Howl from "react-howler";
import "../styles/Sound.css";
import music from "./music.mp3";

const SoundPlayer = () => {
	const [isPlaying, setIsPlaying] = useState(true);

	const togglePlayPause = () => {
		setIsPlaying(!isPlaying);
	};

	return (
		<div className="social-and-sound">
			{/* Instagram Icon */}
			<a
				href="https://www.instagram.com/kalakariofficial/profilecard/?igsh=anB6YjF6eTk0aGpx"
				target="_blank"
				rel="noopener noreferrer"
				className="floating-instagram"
			>
				<FontAwesomeIcon icon={faInstagram} size="2x" />
			</a>
			{/* Play pause button */}
			<Howl src={music} playing={isPlaying} loop={true} volume={1} />
			<button className="icon-button" onClick={togglePlayPause}>
				{isPlaying ? "⏸" : "▶"}
			</button>
		</div>
	);
};

export default SoundPlayer;
