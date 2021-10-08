/* eslint-disable */
import Swiper, { Parallax } from 'swiper';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  init() {
    // JavaScript to be fired on all pages
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired

    header();
    sliders();
    parallax_images();
    services();
  },
};

const sliders = () => {
  slider_frontpage();
}

const slider_frontpage = () => {
  let slider = document.querySelector('.slider-front-page');
  slider && new Swiper(slider.querySelector('.swiper-container'), {
    slidesPerView: 3,
    autoHeight: true,
    direction: 'horizontal',
    loop: false,
    spaceBetween: '30',
    on: {
      init: function () {
        this.update(true);
      },
    },
  });
}

const header = () => {
  const showAnim = gsap.from('header', {
    yPercent: -100,
    paused: true,
    duration: 0.3
  }).progress(1);

  ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
  });
}

const parallax_images = () => {
  gsap.utils.toArray('[data-parallax-image]').forEach((section, i) => {
    section.style.backgroundPosition = `175% ${-innerHeight / 3}px`;

    gsap.to(section, {
      backgroundPosition: `175% ${innerHeight / 3}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: true
      }
    });

  });
}

const services = () => {
  gsap.set('.service', { y: 50, opacity: 0 });

  ScrollTrigger.batch('.service', {
    start: 'top bottom-=150px',
    onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, ease: 'power2.easeIn' }),
    onLeaveBack: batch => gsap.to(batch, { opacity: 0, y: 50, stagger: 0.15, ease: 'power2.easeIn' })
  });
}