import React, { useEffect } from 'react';
import locomotiveScroll from "locomotive-scroll";

import './AboutPage.scss'; 

import Banner from './../../components/Banner';
import Socials from './../../components/Socials';

import Background from '../../assets/img/hero.jpg';

const AboutPage = () => {

  let style_project = {
    backgroundImage: `url(${Background})`,
  }
  
  return (
    <div class="about-page">
      <Banner title="À propos" description="" />
      <div className="wrapper">
        <div className="texte">
          <div>
            <h2 className="noir">UN PEU PLUS À PROPOS DE MOI</h2>
            <p>Perfectionniste et créatif, je m’investis pleinement dans ce que j’entreprends.</p>
            <p>Je me considère comme développeur web. J’aime les défis et je me débrouille toujours pour les surmonter.</p>
            <p>Si vous recherchez quelqu’un de dynamique, allumé et qui a le cœur à l’ouvrage, je suis la personne qu’il vous faut.</p>
            <p>N'hésiter pas à <div className="link">me contacter</div> dès maintenant. Je me situe près de Montréal, Je suis présentement pigiste web et près a discuter de votre projet web.</p>
          </div>
          <Socials />
        </div>
        <div className="projects">
          <div className="image" style={style_project}>
            <div className="action">
              <h1 className="vert">PROJETS <sup>10</sup></h1>
            </div>
            <div className="overlay gris-fonce"></div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default AboutPage;

