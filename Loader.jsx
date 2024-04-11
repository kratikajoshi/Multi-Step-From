import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loader.css';

const Loader = () => {
  const navigate = useNavigate();
  //Setting time to navigate from loader to final page
  useEffect(() => {
    const delay = 5000; // 5 seconds delay

    const timeoutId = setTimeout(() => {
      navigate('/Final');
    }, delay);

    
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="loader-section">
    <div className="loader-circle"></div>
    <p className="loader-text">Finding learning path recommendations for you based on your responses</p>
  </div>
  );
};

export default Loader;
