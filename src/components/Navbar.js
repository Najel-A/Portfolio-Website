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

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Najel
            <i class="fa-solid fa-bowl-rice fa-fade"></i>
          </NavLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/work' className='nav-links' onClick={closeMobileMenu}>
                Work
              </NavLink>
            </li>
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