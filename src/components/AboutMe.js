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
                <p className='sora'>
                My coding journey began in middle school when I began playing Minecraft, my first PC game. 
                I was fascinated with the CLI and how it interacted with the game. I didn't know it at the time,
                but it was my gateway into the world of programming.<br/><br/>
                In December of 2022, I graduated with a B.S. in Computer Science.
                After graduating a semester early, I took a gap year to seek out a path that aligned with
                my interests and goals. <br/><br/>
                As I continue to learn and develop my skills, I'm looking for opportunities preferrably in web development. 
                Here are some of the technologies I've been working with: <br/><br/></p>
                <ul className='tech-list pixel'>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>Unity</li>
                    <li>C#</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutMe;
