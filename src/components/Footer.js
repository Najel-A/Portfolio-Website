import React, { useEffect, useState } from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
  
     
      const buffer = 50; // Adjust this value as needed
  
      if (scrollPosition + windowHeight >= documentHeight - buffer) {
        setFooterVisible(true);
      } else {
        setFooterVisible(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  const footerClass = footerVisible ? 'footer-container footer-visible' : 'footer-container';

  return (
    <div className={footerClass}>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='social-icons'>

            <Link
              className='social-icon-link github'
              to='https://github.com/Najel-A'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-github' />
            </Link>

            <Link
              className='social-icon-link'
              to='mailto:nlalarco@ucsc.edu'
              // target='_blank' Don't want page to reload
              aria-label='Mail'
            >
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
            </Link>

            <Link
              className='social-icon-link linkedin'
              to='https://www.linkedin.com/in/najel-alarcon/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
