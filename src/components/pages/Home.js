import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [welcomeText, setWelcomeText] = useState('');

  useEffect(() => {
    const welcomeMessage = 'Welcome, my name is Najel!';
    let currentIndex = -1;
    let animationFrameId;

    const typeText = () => {
      if (currentIndex < welcomeMessage.length) {
        setWelcomeText((prevText) => prevText + welcomeMessage.charAt(currentIndex));
        currentIndex++;
        animationFrameId = requestAnimationFrame(typeText);
      }
    };

    setShowWelcome(true);
    animationFrameId = requestAnimationFrame(typeText);

    return () => {
      cancelAnimationFrame(animationFrameId);
      setWelcomeText('');
    };
  }, []);

  useEffect(() => {
    setWelcomeText('');
  }, []);

  return (
    <div className="home">
      <div className="content">
        {showWelcome && <div className="welcome-text">{welcomeText}</div>}
        {/* Other content */}
        {/* Add more content here */}
        <div className="filler"></div>
      </div>
    </div>
  );
}

export default Home;
