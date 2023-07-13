import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>

            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/najel.alarcon/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>

            <Link
              class='social-icon-link spotify'
              to='https://open.spotify.com/user/ietws22ymxg71z557j6r81u3t?si=00392b00797d484e'
              target='_blank'
              aria-label='Spotify'
            >
              <i class='fab fa-spotify' />
            </Link>

            <Link
              class='social-icon-link github'
              to='https://github.com/Najel-A'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-github' />
            </Link>

            <Link
              class='social-icon-link discord'
              to='https://discordapp.com/users/Juandissimo'
              target='_blank'
              aria-label='Discord'
            >
              <i class='fab fa-discord' />
            </Link>

            <Link
              class='social-icon-link linkedin'
              to='https://www.linkedin.com/in/najel-alarcon/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;