import React, { useEffect } from 'react';
import '../styles/Splash.css';
import logo from '../images/logo.png'; // Import the logo image

const Splash = ({ onFinish }) => {
  useEffect(() => {
    // Set a timer to hide the splash screen after 3 seconds
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [onFinish]);

  return (
    <div className="splash-container">
      <img src={logo} alt="Kalakari Logo" className="splash-logo" /> {/* Use the imported image */}
    </div>
  );
};

export default Splash;
