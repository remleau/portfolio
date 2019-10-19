import React, { useEffect } from 'react';

import './AboutPage.scss'; 

const AboutPage = () => {
  
  return (
    <section className="hero" id="about">
      <div className="overlay gradient"></div>
      <div className="wrapper">
        <div className="texte">
          <h1 className="" data-scroll data-scroll-speed="-0.5" data-scroll-position="top">À propos</h1>
        </div>
      </div>
    </section>
  );

}

export default AboutPage;
