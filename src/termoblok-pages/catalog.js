import './catalog.css';

import {
  popupRaschet,
} from './popup-raschet.js'

import {
  popupCallBack,
} from './popup-callback.js'

document.querySelector('.mainmodels__raschet_ti').addEventListener('mousedown', ()=> {
  popupRaschet.open();
});

document.querySelector('.mainmodels__raschet_p').addEventListener('mousedown', ()=> {
  popupCallBack.open();
});