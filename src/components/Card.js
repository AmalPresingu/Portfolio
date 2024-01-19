import React from 'react';
import './Card.css';
import '../App.css';
import '../index.css';
import {FaReact, FaJs, FaCode, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';


const Card = ({ projectName, projectUrl, githubUrl, imageUrl, tags, description }) => {
  return (
    <>
    <div className='wrapper-top'></div>
      <div className="project-card">
        <img src={imageUrl} alt={projectName} className="project-card-image" />
        <div className="project-card-content">
          <h3 className="project-card-title">{projectName}</h3>
          <div className="project-card-icons">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Github">
              <FaGithub />
            </a>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
              <FaExternalLinkAlt/>
            </a>
          </div>
          <div className="project-card-tags">
            {tags.map((tag, index) => (
              <span key={index} className="project-tag">{tag}</span>
            ))}
          </div>
          <hr className='project-card-divider'/>
          <p className="project-card-description">{description}</p>
        </div>
      </div>
      <div className='wrapper-bottom'></div>
    </>
  );
};

export default Card;