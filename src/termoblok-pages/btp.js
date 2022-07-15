import './btp.css';

import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

import FormValidator from '../js/components/FormValidator.js';
import FormStatic from '../js/components/FormStatic.js';
import Api from '../js/components/Api.js';
import WOW from 'wow.js';

import {
  lineformConfig,
} from '../js/utils/constants.js';

import {
  renderLoading
} from'../js/utils/utils.js';

import {
  popupCallBack
} from './popup-callback.js'

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

const lineformBtp = document.forms.lineformBtp;
const lineformSubmitButton = lineformBtp.querySelector(lineformConfig.submitButtonSelector);
const lineformValidator = new FormValidator(lineformConfig, lineformBtp);

lineformValidator.enableValidation();

const formApi = new Api({
  //baseUrl: 'https://formspree.io',
  baseUrl: 'https://functions.yandexcloud.net/d4emmiecboqc61f8q1kk',
  headers: {
    'Accept': 'application/json',
    //'Content-Type': 'text/plain'
    'Content-Type': 'application/json;charset=utf-8',
  },
});

const lineformBtpStatic = new FormStatic({
  formSubmitHandler: (formCallbackData) => {
    renderLoading(true, lineformSubmitButton, 'Оставить заявку', 'Отправка...'); //вынести фразы в отдельный объект? elem: profileSubmBut, onLoadText:' ....
    formApi.sendBigForm(formCallbackData)
      .then((response) => {
        console.log(response);
        formRaschetStatic.cleanAll();
        //сделать сообщение об успешной отправке
      })
      .catch((err) => console.log(err)) //сделать сообщение об успешной ошибке
      .finally(() => {
        lineformValidator.disableSaveButton();
        lineformBtp.reset();
          renderLoading(false, lineformSubmitButton, 'Оставить заявку', 'Отправка...');
      });
    console.log(formCallbackData);
    },
  formCleanError: () => {
    //raschetValidatorForm.cleanAllErrors();
  }}, lineformBtp, '.lineform__input');

lineformBtpStatic.setEventListeners();

var swiperBigBtp = new Swiper(".btpBigSwiper", {
  spaceBetween: 0,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var mySwiper1 = new Swiper('.btp-schemes', {
  // Optional parameters
  direction: 'vertical',
  //loop: true,
  parallax: true,
  effect: 'slide',
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  cssMode: false,
  mousewheel: false,
  // If we need pagination
  pagination: {
    type: 'bullets',
    el: '.btp-schemes__pagination-container',
    clickable: true,
    bulletClass: 'btp-schemes__bullet',
    bulletActiveClass: 'btp-schemes__bullet_active',
    renderBullet: function (index, className) {
        let a = '';
        if (index==0) {
          a = 'Узел ввода'
        }
        if (index==1) {
          a = 'Зависимое отоппление'
        }
        if (index==2) {
          a = 'Независимое отопление'
        }
        if (index==3) {
          a = 'Одноступенчатое ГВС'
        }
        if (index==4) {
          a = 'Двухступенчатое ГВС моноблок'
        }
        if (index==5) {
          a = 'Двухступенчатое ГВС с двумя теплообменниками'
        }
        return '<span class= ' + className + '>' + a + '</span>';
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
  breakpoints: {
    // when window width is >= 320px
    320: {
      allowTouchMove: false,
    },
    780: {

    },
    1024: {
      allowTouchMove: true,
    }
  },
})


import FreqDynamic from '../js/components/FreqDynamic.js';

/*let windowWidth = useWindowSizeTest();*/

const freqElements = Array.from(document.querySelectorAll('.table__cell')).map((element) =>
  new FreqDynamic({
    headingSelector: 'table__heading',
    descSelector: 'table__text',
  }, element)
);

freqElements.forEach((element) => {
  element.setEventListeners();
});


document.querySelector('.introgrid__button').addEventListener('mousedown', ()=> {
  popupCallBack.open();
});
document.querySelector('.popup-mini').addEventListener('mousedown', ()=> {
  popupCallBack.open();
});
