import React from 'react';

import './Project.scss'; 

import Background from '../../assets/img/hero.jpg';


const Project = () => {

  let style_project = {
    backgroundImage: `url(${Background})`,
  }

  return (
    <div className="projet">
      <div className="texte">
        <h2>Nom propjet</h2>
        <p>Nunc vulputate justo et justo sodales facilisis. Donec id purus id quam rutrum aliquam.</p>
      </div>
      <div className="image" style={style_project}>
        <div className="overlay gris-fonce"></div>
      </div>
    </div>
  );
}

export default Project;
