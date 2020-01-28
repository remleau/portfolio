import React from 'react';

import './Banner.scss'; 

const Banner = (props) => {

  return (
    <section className="banner">
      <div className="overlay bg-image" data-scroll></div>
      <div className="overlay half-green" data-scroll data-scroll-speed="-1.5" data-scroll-position="top"></div>
      <div className="wrapper">
        <div className="texte">
          <h1 className="" data-scroll data-scroll-speed="1" data-scroll-position="top">{props.title}</h1>
          {props.description ? <p data-scroll data-scroll-speed="-0.5" data-scroll-position="top">{props.description}</p> : null}
        </div>
      </div>
    </section>
  );
}

export default Banner;
