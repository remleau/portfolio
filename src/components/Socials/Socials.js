import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa500px } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import './Socials.scss'; 

const Socials = () => {

  return (
    <div className="socials">
      <a><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
      <a><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
      <a><FontAwesomeIcon icon={fa500px} size="lg" /></a>
    </div>
  );
}

export default Socials;
