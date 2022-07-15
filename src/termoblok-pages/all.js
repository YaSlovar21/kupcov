import './all.css';
import '../images/favicon.svg';

import Popup from '../js/components/Popup.js';
import PopupWithPreloader from '../js/components/PopupWithPreloader.js';

import {popupWithMenuSelector} from '../js/utils/constants.js';

const popupMenu = new Popup(popupWithMenuSelector);
popupMenu.setEventListeners();

const popupPreloader = new PopupWithPreloader('.popup-preloader');


const navMobileButton = document.querySelector('.nav__mobile-icon');
navMobileButton.addEventListener('click', () => popupMenu.open());




popupPreloader.open();
function ready() {
  popupPreloader.close();
}

document.addEventListener("DOMContentLoaded", ready);