import React from 'react';

import './FrontPage.scss'; 

const FrontPage = () => {

  return (
    <section className="hero" id="hero" data-scroll-section>
      <div className="overlay gris-fonce"></div>
      <div className="texte">
        <h1 className="vert" data-scroll="" data-scroll-speed="3">Rémy Groleau <br/> Web Developer</h1>
        <p data-scroll="" data-scroll-speed="2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada at sapien nec ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
        <a className="cta" data-scroll="" data-scroll-speed="1">Call to action</a>
      </div>
    </section>
  );
}

export default FrontPage;
