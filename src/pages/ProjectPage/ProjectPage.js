import React, { useEffect } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './ProjectPage.scss'; 

import Banner from './../../components/Banner';
import Project from './../../components/Project';

const AboutPage = () => {
  
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  function NextArrow(props) {
    return (
      <button {...props} >
        <img src={require('../../assets/img/arrow_forward.svg')} />
      </button>
    );
  }
  
  function PrevArrow(props) {
    return (
      <button {...props} >
        <img src={require('../../assets/img/arrow_backward.svg')} />
      </button>
    );
  }

  return (
    <div className="project-page">
      <Banner title="Projets" description="" />
      <div className="wrapper">
        <div className="projets">
          <div className="texte">
            <h2 className="noir">UN PEU PLUS DE PROJETS</h2>
            <p>Duis vel tellus ac nisi lobortis ultrices. Integer risus arcu, molestie in egestas nec, varius eu dolor.</p>
            <p>Nunc vulputate justo et justo sodales facilisis. Donec id purus id quam rutrum aliquam.</p>
          </div>
        </div>
      </div>
      <div className="slider-projets">
        <Slider {...settings}>
          <Project />
          <Project />
          <Project />
          <Project />
        </Slider>
        <p className="bg-title">Mes projets</p>
      </div>
    </div>
  );

}

export default AboutPage;
