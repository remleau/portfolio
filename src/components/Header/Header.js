import React from 'react';
import { NavLink } from 'react-router-dom';

import Socials from './../Socials';

import './Header.scss'; 

const Header = () => {

  return (
    <header className="wrapper">
      <nav>
        <ul>
          <li><NavLink to={'/'} exact activeClassName='is-active'>Accueil</NavLink></li>
          <li><NavLink to={'/projets'} activeClassName='is-active'>Projet <sup>10</sup></NavLink></li>
          <li><NavLink to={'/a-propos'} activeClassName='is-active'>À propos</NavLink></li>
        </ul>
      </nav>
      <Socials />
    </header>
  );
}

export default Header;
