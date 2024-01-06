import React, { useState, useEffect } from 'react';
import './LandingStyles.css';

const Fade = ({ children, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return <div className={isVisible ? 'fade-slide-in' : 'hidden'}>{children}</div>;
};

export default Fade;
