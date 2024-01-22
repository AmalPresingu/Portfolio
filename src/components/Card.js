import React from 'react';
import './Card.css';
import '../App.css';
import '../index.css';
import {FaReact, FaJs, FaCode, FaGithub, FaExternalLinkAlt, FaHtml5, FaCss3, FaUnity } from 'react-icons/fa';

const tagStyles = {
  'React': { 
    backgroundColor: 'rgba(97, 219, 251, 0.3)', 
    color: 'rgb(97, 219, 251)' // already vibrant, but can be adjusted if needed
  },
  'JavaScript': { 
    backgroundColor: 'rgba(240, 219, 79, 0.3)', 
    color: 'rgb(240, 219, 79)' // increase saturation/brightness if needed
  },
  'HTML5': { 
    backgroundColor: 'rgba(227, 76, 38, 0.2)', 
    color: 'rgb(255, 68, 0)' // more vibrant orange
  },
  'CSS': { 
    backgroundColor: 'rgba(38, 77, 228, 0.3)', 
    color: 'rgb(0, 191, 255)' // more vibrant blue
  },
  'C#': { 
    backgroundColor: 'rgba(35, 145, 32, 0.2)', 
    color: 'rgb(0, 255, 0)' // more vibrant green
  },
  'Unity': { 
    backgroundColor: 'rgba(0, 0, 0, 1)', 
    color: 'rgb(255, 255, 255)' // white is already the most vibrant
  }
}

const Card = ({ projectName, projectUrl, githubUrl, imageUrl, tags, description }) => {
  
  const getIcon = (tagName) => {
    const icons = {
      'React': <FaReact style={tagStyles['React']} />,
      'JavaScript': <FaJs style={tagStyles['JavaScript']} />,
      'HTML5': <FaHtml5 style={tagStyles['HTML5']} />,
      'CSS': <FaCss3 style={tagStyles['CSS']} />,
      //'C#': <FaCode style={tagStyles['C#']} />,
      'Unity': <FaUnity style={tagStyles['Unity']} />,
    }
    return icons[tagName] || null;
  }

  return (
    <>
        <div className="project-card">
        <a href={projectUrl} target='_blank' rel="noopener noreferrer" className='project-card-link'>
          <img src={imageUrl} alt={projectName} className="project-card-image" />
          <div className="project-card-content">
            <div className='project-card-header'>
              <h3 className="project-card-title inter">{projectName}</h3>
              <div className="project-card-icons">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Github">
                  <FaGithub size="27px"/>
                </a>
                <a href={projectUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                  <FaExternalLinkAlt size="27px"/>
                </a>
              </div>
            </div>
            <div className="project-card-tags inter">
              {tags.map((tag, index) => (
                <span key={index} className="project-tag" style={tagStyles[tag] || {}}>
                  {getIcon(tag)} {tag}
                </span>
              ))}
            </div>
            <hr className='project-card-divider'/>
            <p className="project-card-description inter">{description}</p>
          </div>
          </a>
        </div>

      </>
    );
  };

export default Card;