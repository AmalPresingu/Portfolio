import React, { useEffect, useState } from "react";
import './Navbar.css';
import '../App.css';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [reveal, setReveal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const revealTimer = setTimeout(() => {
      setReveal(true);
    }, 3500)

    return () => {
        clearTimeout(revealTimer);
    }
  }, []) 

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
    {reveal && (
      <div className={`Navbar inter ${!show && 'Navbar-hide'}`}>
        <img src="logov2.png" alt="" className="nav-logo" />
        <div className={`nav-items ${isOpen && "open"}`}>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>
        <div
          className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            <div className="bar"></div>
        </div>
      </div>
      )}
    </>
  );
};

export default Navbar;