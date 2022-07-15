import './contacts.css';


import {
  popupCallBack
} from './popup-callback.js'

import {
  popupRaschet
} from './popup-raschet.js'


document.querySelector('.callback-button').addEventListener('mousedown', ()=> {
  popupCallBack.open('Заявка на обратный звонок', 'Здравствуйте, перезвоните мне.');
});

document.querySelector('.callback-partner-button').addEventListener('mousedown', ()=> {
  popupCallBack.open('Запрос на сотрудничество', 'Здравствуйте, хочу узнать условия сотрудничества с заводом.');
});

document.querySelector('.raschet-button').addEventListener('mousedown', ()=> {
  popupRaschet.open();
});