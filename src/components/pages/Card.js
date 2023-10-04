import React from 'react';

const Card = ({ imageUrl, name, description, githubLink }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} height={250} />
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  );
};

export default Card;