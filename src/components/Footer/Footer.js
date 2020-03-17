import React from 'react';

import './Footer.scss'; 

const Footer = () => {

  return (
    <footer className="wrapper" id="footer">
      <div className="read-more" data-scroll data-scroll-position="bottom" data-scroll-speed="-1">
        <p>“Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live”</p>
        <a href="" className="cta">Call to action</a>
      </div>
      <nav>
        <ul data-scroll data-scroll-position="bottom" data-scroll-speed="2">
          <li>Projet<sup>10</sup></li>
          <li>À propos</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="copyright" data-scroll data-scroll-position="bottom" data-scroll-speed="5">
        <div>
          <p>Rémy Groleau Copyright © 2019 tous droits réservés</p>
        </div>
        <div>
          <p><a href="https://locomotive.ca/fr" target="_blank" rel="noopener noreferrer">Special thanks for these guys! #scroll</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
