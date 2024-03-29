import '../App.css';
import '../index.css'
import './Contact.css'
import React from 'react';
import { FaLinkedin, FaEnvelope, FaGithubSquare } from 'react-icons/fa';

const Contact = () => {
    const linkedinUrl = "https://www.linkedin.com/in/amal-presingu-2275a0204/";
    const emailAddress = 'mailto:amalpresingu10@gmail.com';
    const githubUrl = 'https://github.com/AmalPresingu';

    return (
        <div className='contact-section' id='contact'>
            <h1 className='contact-heading inter'>Reach Out</h1>
            <div className='briefing-container'>
                <p className='briefing inter'>I'm currently looking for opportunities, preferably in web and frontend development. Feel free to reach out and I'll get back to you.</p>
            </div>
            <div className='icons-container'>
                <a href = {emailAddress} target='_blank' rel='noreferrer'>
                    <FaEnvelope size = '40px' />
                </a>
                <a href = {githubUrl} target='_blank' rel='noreferrer'>
                    <FaGithubSquare size = '40px'/>
                </a>
                <a href = {linkedinUrl} target='_blank' rel='noreferrer'>
                    <FaLinkedin size = '40px'/>
                </a>
            </div>
        </div>
    )
}

export default Contact;