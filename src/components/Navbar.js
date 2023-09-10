import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import resume from '../images/Najel-Resume.pdf';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const homeOnClick = () => {
    scrollToSection('home');
    closeMobileMenu();
  }

  const aboutOnClick = () => {
    scrollToSection('about');
    closeMobileMenu();
  }

  const workOnClick = () => {
    scrollToSection('work');
    closeMobileMenu();
  }

  const resumeOnClick = () => {
    // Open the Resume PDF in a new tab
    window.open(resume, '_blank');
    closeMobileMenu();
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <NavLink className='navbar-logo' onClick={homeOnClick}>
            Najel
            <i class="fa-solid fa-bowl-rice fa-fade"></i>
          </NavLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink className='nav-links' onClick={homeOnClick}>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-links' onClick={aboutOnClick}>
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-links' onClick={workOnClick}>
                Work
              </NavLink>
            </li>

            <li>
              <button className='nav-links-mobile' onClick={resumeOnClick}>
                Resume
              </button>
            </li>
          </ul>
          {button && (
            <a
           className='btn-mobile' rel="noreferrer">
            <Button buttonStyle='btn--outline' onClick={resumeOnClick}>
              Resume
            </Button>
            </a>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
