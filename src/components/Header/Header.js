import React from 'react';

import './Header.scss'; 

const Header = () => {

  return (
    <header className="wrapper">
      <nav>
        <ul>
          <li><a>Projet<sup>10</sup></a></li>
          <li><a>À propos</a></li>
          <li><a>Contact</a></li>
        </ul>
      </nav>
      <a className="cta invert">Call to action</a>
    </header>
  );
}

export default Header;
