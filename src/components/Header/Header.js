import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss'; 

const Header = () => {

  return (
    <header className="wrapper">
      <nav>
        <ul>
          <li><Link to={'/projets'}>Projet <sup>10</sup></Link></li>
          <li><Link to={'/a-propos'}>À propos</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </nav>
      <Link to={'/'} className="cta invert">Get in touch</Link>
    </header>
  );
}

export default Header;
