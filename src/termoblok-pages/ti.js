import '../pages/ti.css';
import 'animate.css';

import PopupWithImage from '../js/components/PopupWithImage.js';

import {
  popupImageSelector,
  popupImageSelectorsCongig
} from '../js/utils/constants.js';



const popupImage = new PopupWithImage(popupImageSelectorsCongig, popupImageSelector);

const drawing = document.querySelector('.khan__book-pic_page_heatex');
const openDrawingButton = document.querySelector('.khan__buy-link');

openDrawingButton.addEventListener("mousedown", ()=> {
  popupImage.open({
    link: drawing.src,
    name: drawing.alt,
  })
})

const questions = Array.from(
  document
    .querySelectorAll('.frequently__question')
);

questions.forEach(element => {
  element.addEventListener('click', function(evt) {
    const questionElem = evt.target.closest('.frequently__item');
    const answerElem = questionElem.querySelector('.frequently__answer')
    questionElem.classList.toggle('frequently__item_active');
    console.log(evt.target.closest('.frequently__item'));
    answerElem.classList.toggle('animate__animated');
    answerElem.classList.toggle('animate__slow');
    answerElem.classList.toggle('animate__fadeIn');animate__slow
  })
});

const tiAlias = window.location.pathname;

console.log(tiAlias);
