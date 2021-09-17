import Swiper from 'swiper';

export default {
  init() {
    // JavaScript to be fired on all pages
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired

    sliders();
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