import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa500px } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import './Socials.scss'; 

const Socials = () => {

  return (
    <div className="socials">
      <a href="https://www.linkedin.com/in/remygroleau/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
      <a href="https://www.instagram.com/remleau/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
      <a href="https://500px.com/remleau" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={fa500px} size="lg" /></a>
    </div>
  );
}

export default Socials;
