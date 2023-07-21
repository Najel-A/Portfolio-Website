import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

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
              <NavLink to='/' className='nav-links' onClick={homeOnClick}>
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

            {/* Fix the Contact button part later */}
            <li>
              <NavLink to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Contact</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;