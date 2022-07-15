import 'core-js/actual';

import FormValidatorNew from '../js/components/FormValidatorNew.js';
import PopupWithForm from '../js/components/PopupWithForm.js';
import PopupWithBigForm from '../js/components/PopupWithBigForm.js';
import PopupWithHeatEx from '../js/components/PopupWithHeatEx.js';
import PopupWithImage from '../js/components/PopupWithImage.js';
import Api from '../js/components/Api.js';

import 'swiper/swiper-bundle.css';
//import 'animate.css';
//import '../pages/animation.css';
import '../pages/index.css';

//import '../pages/CNAME';
import '../videos/tm_test_video.mp4';

import '../userfiles/Oprosnii_list_podbora_teplovogo_punkta.doc';
import '../userfiles/Oprosnii_list_podbora_teploobmennika.doc';
import '../userfiles/Termoblok_reference_teploobmenniki.pdf';
import '../userfiles/Katalozhnii_list_BTP_Termoblok.pdf';
import '../userfiles/termoblok_catalog.pdf';
import '../userfiles/btp-certificate.pdf';
import '../userfiles/Rekviziti_OOO_Termoblok.doc';
import '../robots.txt';

import {
  initialHeatEx,

  popupImageSelector,     //попап с картинкой (селектор)
  callBackPopupSelector,  //попап с формой обратного звонка (селектор)
  popupWithToSelector,    //попап с теплообменником

  //кнопки открытия модальных окон

  //конфиги
  popupImageSelectorsCongig,
  popupToConfig,
  formValidatorConfig,
  raschetValidatorConfig,
  //идентификатор Formspree формы обратного звонка
  //callbackFormId,


} from '../js/utils/constants.js';

import {
  renderLoading,
  useWindowSize,
  throttle,
} from'../js/utils/utils.js';

const formCallBack= document.forms.formCallBack;
const raschetForm = document.forms.formRaschetPopup;
const callbackSubmitButton = formCallBack.querySelector('.button-bem_submit');
const raschetSubmitButton = raschetForm.querySelector('.raschet-bem__submit-button');

console.log(raschetForm);

//кнопки открытия модальных окон
const callBackPopupOpenButton = document.querySelector('.popup-callback-button');
const raschetPopupOpenButton = document.querySelector('.popup-raschet-button')

//интеактивные пластины
const platesSvg = document.querySelector('.plates__svg');



const formValidatorCallBack = new FormValidatorNew(formValidatorConfig, formCallBack);
formValidatorCallBack.enableValidation();
const raschetValidatorForm = new FormValidatorNew(raschetValidatorConfig, raschetForm);
raschetValidatorForm.enableStepValidation();

const formApi = new Api({
  //baseUrl: 'https://formspree.io',
  baseUrl: 'https://functions.yandexcloud.net/d4emmiecboqc61f8q1kk',
  headers: {
    'Accept': '*/*',
    'Content-Type': 'text/plain'
  },
});

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


const popupImage = new PopupWithImage(popupImageSelectorsCongig, popupImageSelector);
const popupHeatEx = new PopupWithHeatEx(popupToConfig, popupWithToSelector);

const popupCallBack = new PopupWithForm({
  formSubmitHandler: (formCallbackData) => {
    //const name = formCallbackData.name;
    //const tel = formCallbackData.tel;
    const tel = formCallbackData;
    renderLoading(true, callbackSubmitButton, 'Отправить', 'Отправка...'); //вынести фразы в отдельный объект? elem: profileSubmBut, onLoadText:' ....
   // formApi.sendCallForm(name, tel)
    formApi.sendCallForm(formCallbackData)
      .then((response) => {
        console.log(response)
        popupCallBack.close();
        //сделать сообщение об успешной отправке
      })
      .catch((err) => console.log(err)) //сделать сообщение об успешной ошибке
      .finally(() => {
        formValidatorCallBack.disableSaveButton();
        renderLoading(false, callbackSubmitButton, 'Отправить', 'Отправка...');
      });
  },
  formCleanError: () => {
    formValidatorCallBack.cleanAllErrors();
  },
  checherValidation: (formElement) => {
    if (!formValidatorCallBack.hasInvalidInput()) {
      return true;
    } else {
      formValidatorCallBack.showErrors();
      return false;
    }
  }
}, callBackPopupSelector, '.popup__form','.raschet-bem__input');


const popupRaschet = new PopupWithBigForm({
  formSubmitHandler: (formCallbackData) => {
    //const name = formCallbackData.name;
    const name='test';
    const tel = formCallbackData;
    renderLoading(true, raschetSubmitButton, 'Отправить', 'Отправка...'); //вынести фразы в отдельный объект? elem: profileSubmBut, onLoadText:' ....
    formApi.sendBigForm(formCallbackData)
       .then((response) => {
         console.log(response)
         popupRaschet.close();
        //сделать сообщение об успешной отправке
      })
       .catch((err) => console.log(err)) //сделать сообщение об успешной ошибке
       .finally(() => {
          raschetValidatorForm.disableSaveButton();
          renderLoading(false, raschetSubmitButton, 'Отправить', 'Отправка...');
       });
    console.log(formCallbackData);
  },
  formCleanError: () => {
    raschetValidatorForm.cleanAllErrors();
  },
  checherValidation: (formElement) => {
    if (!raschetValidatorForm.hasInvalidInput()) {

      return true;
    } else {
      raschetValidatorForm.showErrors();
      return false;
    }
  }
}, '.popup-raschet', '.raschet-bem', '.raschet-bem__input')

popupImage.setEventListeners();
popupCallBack.setEventListeners();
popupRaschet.setEventListeners();
popupHeatEx.setEventListeners();

//навешиваем слушатели на элементы сайта
//сделать forEach по всем кнопкам с селектором "кнопки открытия попапа"
callBackPopupOpenButton.addEventListener("mousedown", () => {
  popupCallBack.open();
})
raschetPopupOpenButton.addEventListener("mousedown", () => {
  popupRaschet.open();
});

document.querySelector('.mainmodels__raschet').addEventListener("mousedown", () => {
  popupRaschet.open();
});

platesSvg.addEventListener("click", (evt) => {
  popupHeatEx.open(initialHeatEx[evt.target.dataset.to]);
  console.log(initialHeatEx[evt.target.dataset.to]);
});

document.querySelectorAll('.photo-grid__item').forEach((item) => {
  item.addEventListener("mousedown", (evt) => {
    console.log(evt.target);
    popupImage.open({
      link: evt.target.querySelector('.photo-grid__image').src,
      name: evt.target.querySelector('.photo-grid__image').alt,
    });
  });
});


const backButton = document.querySelector(".form-back-button");
const nextButton = document.querySelector(".form-next-step");
const popupAbsolute = document.querySelector(".popup-absolute");
backButton.addEventListener("mousedown", (evt) => {
  popupAbsolute.classList.remove("popup__form-fio_opened");
  popupRaschet.decreaseStep();
  console.log(popupRaschet._step);
});

nextButton.addEventListener("mousedown", () => {
  //Проверяем шаг на валидность, показать ошибки если есть, заблокировать кнопку
  if (raschetValidatorForm.checkStep(0)) {
    popupAbsolute.classList.add("popup__form-fio_opened");
    popupRaschet.increaseStep();
    console.log(popupRaschet._step);
  }
});


const turnModelsButton = document.querySelector('.mainmodels__turnbutton');
turnModelsButton.addEventListener('mousedown', (evt) => {
  const wrapper = evt.target.closest('.mainmodels__wrapper');
  if (wrapper.classList.contains('mainmodels__wrapper_food')) {
    turnModelsButton.textContent = 'Смотреть в пищевом исполнении';
  } else {
    turnModelsButton.textContent = 'Смотреть в типовом исполнении';
  }
  wrapper.classList.toggle('mainmodels__wrapper_food');
})


const dsSecond = document.querySelector('.ds-second');
const dsIntroImg = document.querySelector('.ds-intro__img-container');
const dsList = document.querySelector('.bem__list_page_main');


const dsSecondBox = dsSecond.getBoundingClientRect().y + window.pageYOffset;
function recalculateParallax() {
  const limitDs = dsSecondBox - window.scrollY;
  console.log(limitDs);
  if (window.innerWidth < 768) {
    if (limitDs < 348 && !dsIntroImg.classList.contains('ds-intro__img-container_hidden')) {
      dsIntroImg.classList.add('ds-intro__img-container_hidden');
      dsList.classList.add('bem__list_minified');
    }
    if (limitDs > 780 && dsIntroImg.classList.contains('ds-intro__img-container_hidden')) {
      dsIntroImg.classList.remove('ds-intro__img-container_hidden');
      dsList.classList.remove('bem__list_minified');
    }
  //dsIntroImg.setAttribute('style', `display:${limitDs > 254 ? 'block' : 'none'}`)

  }
};

const optimizedHandler = throttle(recalculateParallax, 850);
// Передаём новую throttled-функцию в addEventListener:
window.addEventListener("scroll", optimizedHandler);


/*
let dsSecondBox = dsSecond.getBoundingClientRect();
window.addEventListener('scroll', function() {
  dsSecondBox = dsSecond.getBoundingClientRect();
  if (window.innerWidth < 768) {
    dsIntroImg.setAttribute('style', `display:${dsSecondBox.top > 250 ? 'block' : 'none'}`)
    if (dsSecondBox.top < 250 ) {
      dsList.classList.add('bem__list_minified');
    } else {
      dsList.classList.remove('bem__list_minified');
    }
  }
});
*/
/* Слайдер в хидере на главной */
const mainHeaderSlider = new Swiper(".mainHeaderSlider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  parallax: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 800,
  autoplay: true,
});

const swiperInfo = new Swiper('.scroll-slider', {
  direction: 'vertical',
  slidesPerView: 'auto',
  freeMode: true,
  nested: true,

  scrollbar: {
    el: '.swiper-scrollbar-main',
    draggable: true,
    hide: false,
    snapOnRelease: false,
  },
  mousewheel: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      scrollbar: false,
    },
    780: {

    },
    1024: {

    }
  },
});
swiperInfo.update();

const windowWidth= useWindowSize();
  if(windowWidth < 768) {
    console.log(windowWidth);
    swiperInfo.destroy(false,false);
  } else {
    swiperInfo.update();
}


const types_swiper = new Swiper('.product-types', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,
  centeredSlides: true,

  loop: true,
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
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: function () {
      console.log('swiper initialized');
    }
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    780: {
      slidesPerView: 2.4,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
    }
  },


  // And if we need scrollbar
})
types_swiper.update();

const videoContainer = document.querySelector('.header-index__video-container');
const widthScreen = useWindowSize();
if (widthScreen > 768) {
  const videoEl = document.createElement("video");
  /// ... some setup like poster image, size, position etc. goes here...
  videoEl.preload = "false";
  videoEl.autoplay = true;
  videoEl.muted = true;
  videoEl.src = "videos/tm_test_video.mp4";
  videoEl.setAttribute("playsinline", "playsinline");
  videoEl.onloadeddata = function () {
    //myVideo.play();
  };
  videoEl.classList.add("myvideo");
  /*const sourceMp4 = document.createElement('source');
  sourceMp4.type = 'video/mp4';
  sourceMp4.src = ;
  videoEl.append(sourceMp4);*/
  videoContainer.append(videoEl);
}