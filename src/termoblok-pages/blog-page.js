import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

import './blog-page.css'

import FormStaticJsRendered from '../js/components/FormStaticJsRendered.js';
import Section from '../js/components/Section.js';
import Api from '../js/components/Api.js';

//import ptoOtop from "../articles/pto-otop.html";

//import '../blog-images/pto-otop-proizv.png';

import {
  raschetValidatorConfig,
} from '../js/utils/constants.js';
import {
  renderLoading
} from'../js/utils/utils.js';

const formApi = new Api({
  //baseUrl: 'https://formspree.io',
  baseUrl: 'https://functions.yandexcloud.net/d4emmiecboqc61f8q1kk',
  headers: {
    'Accept': '*/*',
    'Content-Type': 'text/plain'
  },
});

const openRaschetButton = document.querySelector('.info__aside-button');
const raschetSection = document.querySelector('.inforaschet');

openRaschetButton.addEventListener('click', ()=>{
  if (!raschetSection.classList.contains('inforaschet_active')) {
    openRaschetButton.scrollIntoView({
      behavior: 'smooth'
    });
  }
  raschetSection.classList.toggle('inforaschet_active');
  raschetSection.classList.toggle('animate__animated');
  raschetSection.classList.toggle('animate__slow');
  raschetSection.classList.toggle('animate__fadeIn');
});

const swiperInfo = new Swiper('.info__article-container', {
  direction: 'vertical',
  slidesPerView: 'auto',
  freeMode: true,
  scrollbar: {
    el: '.swiper-scrollbar',

  },
  parallax: true,
  mousewheel: {
    eventsTarget: '.info__article-container',
  },
  nested: true,

});


const formRaschet = new FormStaticJsRendered({
  templateSelector: '.form-big-template',
  formSubmitHandler: (formCallbackData, submitButton) => {
    renderLoading(true, submitButton, 'Отправить', 'Отправка...'); //вынести фразы в отдельный объект? elem: profileSubmBut, onLoadText:' ....
    formApi.sendBigForm(formCallbackData)
      .then((response) => {
        console.log(response);
        formRaschet.cleanAll();
        //сообщение про удачную доставку
      })
      .catch((err) => console.log(err)) //сделать сообщение об успешной ошибке
      .finally(() => {
          //raschetValidatorForm.disableSaveButton();
          renderLoading(false, submitButton, 'Отправить', 'Отправка...');
      });
    console.log(formCallbackData);
    },
  formCleanError: () => {
    //raschetValidatorForm.cleanAllErrors();
  },
  formInputSelector: '.raschet-bem__input',
  formSubmitSelector: '.raschet-bem__submit-button',
  validationConfig: raschetValidatorConfig,
});

// инициализация формы
const formSection = new Section({
  data: []
}, '.section-submit');

const formElement1 = formRaschet.generate();
formSection.setItem(formElement1);
/*
const closeRaschetPopupButton = document.querySelector('.form__close-popup');
const openRaschetPopupButton = document.querySelector('.form-popup-open-button');
const formPopup = document.querySelector('.form__popup');
openRaschetPopupButton.addEventListener('click', (evt) => {
  formPopup.classList.add('form__popup_opened');
});
closeRaschetPopupButton.addEventListener('click', (evt) => {
  console.log(evt.target.closest('.form__popup'));
  evt.target.closest('.form__popup').classList.remove('form__popup_opened');
});
var form = document.querySelector('form');
form.addEventListener('change', function() {
    alert('Hi!');
});
*/