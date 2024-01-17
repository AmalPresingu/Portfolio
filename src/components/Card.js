import React from 'react';
import './Card.css';
import '../App.css';
import '../index.css';

const Card = ({projectName, projectUrl, githubUrl, imageUrl, tags, description}) => {
  return (
    <>
      <div className="project-card">
      <div className="project-card-header">
        <h3>{projectName}</h3>
        <div className="project-card-icons">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Github">
            {/* Insert GitHub icon here */}
          </a>
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
            {/* Insert live demo icon here */}
          </a>
        </div>
      </div>
      <img src={imageUrl} alt={projectName} className="project-card-image" />
      <div className="project-card-body">
        <div className="project-card-tags">
          {tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
        </div>
        <p className="project-card-description">{description}</p>
      </div>
    </div>
    </>
  )
}

export default Card;