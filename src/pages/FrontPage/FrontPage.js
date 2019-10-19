import React, { useEffect } from 'react';

import './FrontPage.scss'; 

const FrontPage = () => {
  
  useEffect(() => {

    document.body.classList.add('home-page');

  },[]);

  useEffect(() => {
    return () => {
      document.body.classList.remove('home-page');
    }
  }, []);



  return (
    <div className="container"> 

      <section className="hero" id="hero">
        <div className="overlay gradient"></div>
        <div className="wrapper">
          <div className="texte">
            <h1 className="">
              <span data-scroll data-scroll-speed="-0.5" data-scroll-position="top" >Rémy Groleau</span>
              <span className="light" data-scroll data-scroll-speed="-1" data-scroll-position="top">Developpeur Front End</span>
            </h1>
            <p data-scroll data-scroll-speed="-0.5" data-scroll-position="top">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada at sapien nec ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
          </div>
        </div>
      </section>

    </div>
  );

}

export default FrontPage;
