import './about.css';

import PopupWithImage from '../js/components/PopupWithImage.js';

import {
  popupImageSelector,     //попап с картинкой (селектор)
  popupImageSelectorsCongig
} from '../js/utils/constants.js'

const imgToChange = document.querySelector('.listimage__image');
const bullets = Array.from(document.querySelectorAll('.listimage__list-item'))

function changeSrc(imageElement, newSrc) {
  unsetListeners(bullets);
  imageElement.style.opacity = '0';
  setTimeout(()=>{
    imageElement.style.opacity = '1';

  }, 700)
  setTimeout(()=> {
    imageElement.src = newSrc;
  }, 600);
  setTimeout(()=> {
    setEventListeners(bullets)
  }, 700)
}

let newSrc = '';

function handleMousOvered(evt) {
  if (!evt.target.classList.contains('listimage__list-item_active')) {
    changeSrc(imgToChange, evt.target.dataset.img);
    evt.target.classList.add('listimage__list-item_active');
  }
}

function setEventListeners(bullets) {
  bullets.forEach((item)=> {
    item.addEventListener('mouseover',  handleMousOvered);
  })
}
function unsetListeners(bullets) {
  bullets.forEach((item)=> {
    if (item.classList.contains('listimage__list-item_active')) {
      item.classList.remove('listimage__list-item_active');
    }
    item.removeEventListener('mouseover', handleMousOvered);
  })
}

setEventListeners(bullets);



/* */

const popupImage = new PopupWithImage(popupImageSelectorsCongig, popupImageSelector);
popupImage.setEventListeners();

document.querySelectorAll('.annotation__image').forEach((item) => {
  item.addEventListener("mousedown", (evt) => {
    popupImage.open({
      link: evt.target.src,
      name: evt.target.alt,
    });
  });
});

