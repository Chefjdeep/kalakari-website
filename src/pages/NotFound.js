import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center', color: 'white' }}>
      <h1>404 - Page Not Found</h1>
      <p>Redirecting to home page...</p>
    </div>
  );
};

export default NotFound;
