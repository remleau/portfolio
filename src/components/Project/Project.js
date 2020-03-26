import React from 'react';

import './Project.scss'; 

import Background from '../../assets/img/hero.jpg';


const Project = () => {

  let style_project = {
    backgroundImage: `url(${Background})`,
  }

  return (
    <div className="wrap-project">
      <div className="overlay-project"></div>
      <div className="projet">
        <div className="image" style={style_project}>
          <div className="overlay gris-fonce"></div>
        </div>
        <div className="texte">
          <h2 className="vert">Nom propjet</h2>
          <p>Nunc vulputate justo et justo sodales facilisis. Donec id purus id quam rutrum aliquam. <span className="link">me contacter</span></p>
        </div>
      </div>
    </div>
  );
}

export default Project;
