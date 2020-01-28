import React from 'react';

import './Footer.scss'; 

const Footer = () => {

  return (
    <footer className="wrapper" id="footer">
      <div className="read-more" data-scroll data-scroll-position="bottom" data-scroll-speed="-1">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada at sapien nec ornare.</p>
        <a className="cta">Call to action</a>
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
          <p><a href="https://locomotive.ca/fr">Special thanks for these guys! #scroll</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
