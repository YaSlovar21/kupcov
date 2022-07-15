import './pto-food.css';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

import PopupWithImage from '../js/components/PopupWithImage.js';

import {
  popupCallBack
} from './popup-callback.js';

import {
  popupImageSelector,     //попап с картинкой (селектор)
  //конфиги
  popupImageSelectorsCongig,
} from '../js/utils/constants.js';

import WOW from 'wow.js';

const wowAnimation = new WOW({
  boxClass:     'wow',      // animated element css class (default is wow)
  animateClass: 'animated', // animation css class (default is animated)
  offset:       0,          // distance to the element when triggering the animation (default is 0)
  mobile:       true,       // trigger animations on mobile devices (default is true)
  live:         true,       // act on asynchronously loaded content (default is true)
  scrollContainer: null,    // optional scroll container selector, otherwise use window,
  resetAnimation: true,     // reset animation on end (default is true)
});
wowAnimation.init();

document.querySelector('.introgrid__button').addEventListener('mousedown', (evt)=> {
  evt.preventDefault();
  popupCallBack.open('Проконсультироваться с инженером');
});

var mySwiper = new Swiper('.food-types-container', {
  // Optional parameters
  direction: 'horizontal',
  autoplay: {
    delay: 3000,
  },
  speed: 800,
  //loop: true,
  parallax: true,
  effect: 'slide',
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // If we need pagination
  pagination: {
    type: 'bullets',
    el: '.food-type__pagination-container',
    clickable: true,
    bulletClass: 'food-type__bullet',
    bulletActiveClass: 'food-type__bullet_active',
    renderBullet: function (index, className) {
        let a = '';
        if (index==0) {
          a = 'Односекционные'
        }
        if (index==1) {
          a = 'Многосекицонные'
        }
        if (index==2) {
          a = 'Установки ПОУ'
        }
        return '<span class=' + className + '>' + a + '</span>';
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    //el: '.swiper-scrollbar',
  },
});
mySwiper.on('orientationchange', function () {
  swiper_on_video.update();
  console.log('UPDATED_ORIENT');
});

const popupImage = new PopupWithImage(popupImageSelectorsCongig, popupImageSelector);
popupImage.setEventListeners();

document.querySelectorAll('.food-grid__image').forEach((item) => {
  item.addEventListener("mousedown", (evt) => {
    console.log(evt.target);
    popupImage.open({
      link: evt.target.src,
      name: evt.target.alt,
    });
  });
});