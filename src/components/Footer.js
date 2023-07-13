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

      if (scrollPosition + windowHeight >= documentHeight) {
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
              className='social-icon-link facebook'
              to='https://www.facebook.com/najel.alarcon/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>

            <Link
              className='social-icon-link spotify'
              to='https://open.spotify.com/user/ietws22ymxg71z557j6r81u3t?si=00392b00797d484e'
              target='_blank'
              aria-label='Spotify'
            >
              <i className='fab fa-spotify' />
            </Link>

            <Link
              className='social-icon-link github'
              to='https://github.com/Najel-A'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-github' />
            </Link>

            <Link
              className='social-icon-link discord'
              to='https://discordapp.com/users/Juandissimo'
              target='_blank'
              aria-label='Discord'
            >
              <i className='fab fa-discord' />
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
