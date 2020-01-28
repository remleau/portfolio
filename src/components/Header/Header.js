import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss'; 

const Header = () => {

  return (
    <header className="wrapper">
      <nav>
        <ul>
          <li><NavLink to={'/'} exact activeClassName='is-active'>Accueil</NavLink></li>
          <li><NavLink to={'/projets'} activeClassName='is-active'>Projet <sup>10</sup></NavLink></li>
          <li><NavLink to={'/a-propos'} activeClassName='is-active'>À propos</NavLink></li>
          <li><NavLink to={'/contact'} activeClassName='is-active'>Contact</NavLink></li>
        </ul>
      </nav>
      <NavLink to={'/'} className="cta invert">Get in touch</NavLink>
    </header>
  );
}

export default Header;
