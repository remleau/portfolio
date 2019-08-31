import React from 'react';

import './FrontPage.scss'; 

const FrontPage = () => {

  return (
    <div className="container"> 

      <section className="hero" id="hero">
        <div className="overlay image"></div>
        <div className="overlay gris-fonce"></div>
        <div className="wrapper">
          <div className="texte">
            <h1 className="">
              <span data-scroll data-scroll-speed="-0.5" data-scroll-position="top" >Rémy Groleau</span>
              <span className="light" data-scroll data-scroll-speed="-1" data-scroll-position="top">Developpeur Front End</span>
            </h1>
            <p data-scroll data-scroll-speed="-0.5" data-scroll-position="top">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada at sapien nec ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
          </div>
        </div>
        <div className="liens-vedette" data-scroll data-scroll-position="top" data-scroll-speed="-1">
          <div>
            <h4>Lorem ipsum</h4>
            <p>Consectetur adipiscing elit. Nunc malesuada at sapien nec ornare. Vestibulum ante ipsum primis in faucibus</p>
          </div>
          <div>
            <h4>Lorem ipsum</h4>
            <p>Consectetur adipiscing elit. Nunc malesuada at sapien nec ornare. Vestibulum ante ipsum primis in faucibus</p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="wrapper texte">
          <h2 className="vert">À propos</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada at sapien nec ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada at sapien nec ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
          <a className="cta">Call to action</a>
        </div>
      </section>

      <section className="projets" id="projets">
        <div className="wrapper texte">
          <h2 className="vert">Mes projets <sup>10</sup></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada at sapien nec ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
          <a className="cta">Call to action</a>
        </div>
      </section>

    </div>
  );

}

export default FrontPage;
