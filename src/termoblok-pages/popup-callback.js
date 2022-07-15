import './popup-callback.css';

import FormValidatorNew from '../js/components/FormValidatorNew.js';
import PopupWithForm from '../js/components/PopupWithForm.js';
import Api from '../js/components/Api.js';

import {
  callBackPopupSelector,
  formValidatorConfig,
} from '../js/utils/constants.js';
import {
  renderLoading,
} from'../js/utils/utils.js';

const formApi = new Api({
  baseUrl: 'https://functions.yandexcloud.net/d4emmiecboqc61f8q1kk',
  headers: {
    'Accept': '*/*',
    'Content-Type': 'text/plain'
  },
});



const formCallBack= document.forms.formCallBack;
const callbackSubmitButton = formCallBack.querySelector('.button-bem_submit');
const formValidatorCallBack = new FormValidatorNew(formValidatorConfig, formCallBack);


export const popupCallBack = new PopupWithForm({
  formSubmitHandler: (formCallbackData) => {
    const tel = formCallbackData;
    renderLoading(true, callbackSubmitButton, 'Отправить', 'Отправка...'); //вынести фразы в отдельный объект? elem: profileSubmBut, onLoadText:' ....
    formApi.sendCallForm(formCallbackData)
      .then((response) => {
        console.log(response)
        popupCallBack.close();
        //сделать сообщение об успешной отправке
      })
      .catch((err) => console.log(err)) //сделать сообщение об ошибке
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

popupCallBack.setEventListeners();
formValidatorCallBack.enableValidation();