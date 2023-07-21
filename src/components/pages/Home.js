import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import './Home.css';
import './About.css';
import './Work.css';

const useWelcomeAnimation = (welcomeMessage) => {
  const [welcomeText, setWelcomeText] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    let currentIndex = -1;
    let animationFrameId;

    const typeText = () => {
      if (currentIndex < welcomeMessage.length) {
        setWelcomeText((prevText) => prevText + welcomeMessage.charAt(currentIndex));
        currentIndex++;
        animationFrameId = requestAnimationFrame(typeText);
      } else {
        setShowWelcome(true);
      }
    };

    animationFrameId = requestAnimationFrame(typeText);

    return () => {
      cancelAnimationFrame(animationFrameId);
      setWelcomeText('');
    };
  }, [welcomeMessage]);

  return { welcomeText, showWelcome };
};

function Home() {
  const { welcomeText: homeWelcomeText, showWelcome: showHomeWelcome } = useWelcomeAnimation(
    'Welcome, my name is Najel!'
  );

  const { welcomeText: aboutWelcomeText, showWelcome: showAboutWelcome } = useWelcomeAnimation(
    'Welcome to the About page!'
  );

  const { welcomeText: workWelcomeText, showWelcome: showWorkWelcome } = useWelcomeAnimation(
    'Welcome to the Work page!'
  );

  return (
    <>
      <Navbar />
      <div className="home" id="home">
        <div className="content">
          {showHomeWelcome && <div className="welcome-text">{homeWelcomeText}</div>}
          {/* Content for the home section */}
          {/* Add more content here */}
          {/* <div className="filler"></div> */}
        </div>
      </div>

      <div className="about" id="about">
        <div className="content">
          {showAboutWelcome && <div className="welcome-text">{aboutWelcomeText}</div>}
          {/* Content for the about section */}
          {/* Add more content here */}
          {/* <div className="filler"></div> */}
        </div>
      </div>

      <div className="work" id="work">
        <div className="content">
          {showWorkWelcome && <div className="welcome-text">{workWelcomeText}</div>}
          {/* Content for the work section */}
          {/* Add more content here */}
          {/* <div className="filler"></div> */}
        </div>
      </div>
    </>
  );
}

export default Home;
