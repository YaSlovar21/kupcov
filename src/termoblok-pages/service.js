import './service.css'

import {
  popupCallBack
} from './popup-callback.js'

document.querySelector('.promivka-popup-callback').addEventListener('mousedown', ()=> {
  popupCallBack.open('Заявка на сервис');
});

document.querySelector('.shareparts-popup-callback').addEventListener('mousedown', ()=> {
  popupCallBack.open('Заявка на комплектующие', 'Здравствуйте, просьба отправить прайс на комплектующие.');
});



const formChoice = document.forms.formChoice;
const plastTable = document.querySelector('.service-grid__plast-table');
const sealsTable = document.querySelector('.service-grid__seals-table');

formChoice.addEventListener("change" , ()=>{
  if (formChoice.elements.radio.value === 'plast') {
    plastTable.style.display = 'block';
    sealsTable.style.display = 'none';
  } else {
    plastTable.style.display = 'none';
    sealsTable.style.display = 'block';
  }
});