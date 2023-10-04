import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import './Home.css';
import './About.css';
import './Work.css';
import placeholder from '../../images/placeholder.jpg';
import Card from './Card';

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
          {/* {showAboutWelcome && <div className="welcome-text">{aboutWelcomeText}</div>} */}
          <div className="image-container">
            <img src={placeholder} alt="Placeholder" />
          </div>
          <div className="text-container">
            <p>
              Hi! I'm Najel Alarcon, a recent Computer Engineering graduate with a minor in Computer Science from the University of California, Santa Cruz. I'm based in San Francisco, CA, and I'm eager to make a mark in the world of software engineering.
              Throughout my journey at UC Santa Cruz from September 2019 to June 2023, I honed my skills in various programming languages, including C, C++, Python, JavaScript, and Java. Additionally, I'm well-versed in modern technologies like React, HTML, CSS, Git, and Unix.
              Thank you for visiting my portfolio! Feel free to reach out to me at nlalarco@ucsc.edu or connect with me on LinkedIn at linkedin.com/in/najel-alarcon. I'm excited about the possibilities of working together to shape a better technological future.
            </p>
          </div>
        </div>
      </div>

      <div className="work" id="work">
        <div className="content">
          <div class="flex-container">
            <div class="flex-item-left">
              <Card
                imageUrl={placeholder}
                name="name2"
                description="Blah"
                githubLink="www.google.com"
              />
            </div>
            <div class="flex-item-left">
              <Card
                imageUrl={placeholder}
                name="name2"
                description="Blah"
                githubLink="www.google.com"
              />
            </div>

            <div class="flex-item-left">
              <Card
                imageUrl={placeholder}
                name="name2"
                description="Blah"
                githubLink="www.google.com"
              />
            </div>
            <div class="flex-item-left">
              <Card
                imageUrl={placeholder}
                name="name2"
                description="Blah"
                githubLink="www.google.com"
              />
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Home;
