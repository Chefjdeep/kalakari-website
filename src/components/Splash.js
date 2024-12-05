import React, { useEffect } from 'react';
import '../styles/Splash.css';

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
      <img src="/images/logo.png" alt="Kalakari Logo" className="splash-logo" />
    </div>
  );
};

export default Splash;
