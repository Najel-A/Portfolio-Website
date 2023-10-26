import React from 'react';

const Card = ({ imageUrl, name, description, githubLink }) => {
  const buttonStyle = {
    background: 'green',
    color: 'white', 
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const buttonContainerStyle = {
    marginTop: '20px',
    marginBottom: '10px'
  };

  return (
    <div className="card" style={containerStyle}>
      <img src={imageUrl} alt={name} height={250} />
      <h2>{name}</h2>
      <p>{description}</p>
      <div style={buttonContainerStyle}>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Card;
