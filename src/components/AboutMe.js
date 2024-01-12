import React from 'react';
import './LandingStyles.css';
import './AboutMe.css'
import '../App.css'
import '../index.css'

const AboutMe = () => {
    return (
        <div className='about-container'>
            <h1 className='label inter'>About Me</h1>
            <div className='p-container'>
                <p className='sora'>I’m a software engineer specializing in web development. My coding journey began in middle school when I began playing Minecraft, my first PC game. I was fascinated with the CLI and how it interacted with the game. </p>
            </div>
        </div>
    );
};

export default AboutMe;
