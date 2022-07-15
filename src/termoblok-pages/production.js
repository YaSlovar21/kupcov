import '../pages/production.css';

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

import {
  popupCallBack
} from './popup-callback.js'

document.querySelector('.oblasti__button').addEventListener('mousedown', ()=> {
  popupCallBack.open('Проконсультироваться с инженером');
});
