import React from 'react';

import './Header.scss'; 

const Header = () => {

  return (
    <header data-scroll-section>
      <nav>
        <ul>
          <li>Projet<sup>10</sup></li>
          <li>À propos</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
