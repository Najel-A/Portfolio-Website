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

  const reliableFileTransferDescription = "A robust file transfer application in C, using the User Datagram Protocol (UDP) for efficient data transmission. It featured the implementation of a selective repeat protocol on top of UDP, ensuring reliable and error-free file transfers by incorporating acknowledgment, sequence numbers, and retransmission. The project also integrated error detection and correction mechanisms, such as checksum calculations and packet acknowledgment, to guarantee the integrity and reliability of transmitted files.";
  const slackCloneMobileAppDescription = "Three versions of a Slack Clone Mobile Application in Kotlin, Swift, and React Native. This dynamic application seamlessly integrates RESTful APIs for real-time messaging, robust authorization token management, and collaborative features.Throughout development, thorough testing was conducted to ensure the reliability and functionality of the apps.";
  const IoTDescription = "An obstacle detection, crafted using C++ and powered by Arduino Nano 33 BLE. This cutting-edge system seamlessly integrates IR Obstacle Avoidance Sensors (IRAS) with GPIO read/write operations, triggering an external red LED when obstacles are detected. Not only does it provide real-time obstacle detection feedback on an LCD display,  it also configures the Nano 33 BLE as a peripheral device. This enables real-time updates via our custom BLE Cell Phone App or BLE console, complete with a custom read/notify service that delivers 32-bit float numbers for X, Y, Z acceleration, motion status, and obstacle presence.";
  const HTTPServerDescription = "A fully functional HTTP server built in C supporting CRUD operations such as GET, HEAD, and PUT. This server boasts a simplified HTTP protocol with essential response codes such as 200, 201, 404 and 500, advanced socket programming for reliability, thread-safe operations for core HTTP methods, efficient byte parsing, customizable resource utilization, and an audit log for monitoring and debugging requests from server to clients.";

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
        <div class="about-content">
          <div class="image-container">
            <img src={placeholder} height={450} width={450}/>
          </div>
          <div class="text-container">
            <p>Hi! I'm Najel Alarcon, a recent Computer Engineering graduate with a minor in Computer Science from the University of California, Santa Cruz.
              I'm based in San Francisco, CA, and I'm eager to make a mark in the world of software engineering.
              Throughout my journey at UC Santa Cruz from September 2019 to June 2023, I honed my skills in various programming
               languages, including C, C++, Python, JavaScript, and Java. Additionally, I'm well-versed in modern technologies like React, HTML, CSS, Git, and Unix.
              Thank you for visiting my portfolio! Feel free to reach out to me at <a href="mailto:nlalarco@ucsc.edu">nlalarco@ucsc.edu</a> or connect with me on LinkedIn at <a href="https://www.linkedin.com/in/najel-alarcon/" target="_blank">linkedin.com/in/najel-alarcon</a>.
               I'm excited about the possibilities of working together to shape a better technological future.
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
                name="File Transfer"
                description={reliableFileTransferDescription}
                githubLink="https://gitfront.io/r/user-5426869/A6J34nYmR9Jj/Simple-Reliable-File-Transfer/"
              />
            </div>
            <div class="flex-item-left">
              <Card
                imageUrl={placeholder}
                name="Slack Clone Mobile Application"
                description={slackCloneMobileAppDescription}
                githubLink="https://gitfront.io/r/user-5426869/NaGqjVdEXybp/Slack-Clone-React-Native/"
              />
            </div>

            <div class="flex-item-left">
              <Card
                imageUrl={placeholder}
                name="IoT Obstacle Detection System"
                description={IoTDescription}
                githubLink="https://gitfront.io/r/user-5426869/BxRsVB38sVWm/IoT-Obstacle-Detection/"
              />
            </div>
            <div class="flex-item-left">
              <Card
                imageUrl={placeholder}
                name="HTTP Server"
                description={HTTPServerDescription}
                githubLink="https://gitfront.io/r/user-5426869/tjtNEbqXMFNb/HTTP-Server/"
              />
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Home;
