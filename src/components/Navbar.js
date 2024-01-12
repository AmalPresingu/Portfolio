import React, { useEffect, useState } from "react"
import './Navbar.css';
import '../App.css'


const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const navTimer = setTimeout(() => {
            setShowNav(true);
        }, 3700)

        return () => {
            clearTimeout(navTimer);
        }
    }, []) 
    return (
        <>
            {showNav && (
                <div className="Navbar inter">
                    <img src="logov2.png" alt="" className="nav-logo"></img>
                    <div className={`nav-items ${isOpen && "open"}`}>
                        <a href="/home">Home</a>
                        <a href="/about">About</a>
                        <a href="/projects">Projects</a>
                        <a href="/contact">Contact</a>
                    </div>
                    <div
                        className={`nav-toggle ${isOpen && "open"}`} 
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="bar"></div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar;