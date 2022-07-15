import {
  renderLoading,
} from'../js/utils/utils.js';

import PopupWithBigForm from '../js/components/PopupWithBigForm.js';
import FormValidatorNew from '../js/components/FormValidatorNew.js';
import Api from '../js/components/Api.js';

import {
  raschetValidatorConfig
} from '../js/utils/constants.js';
const formApi = new Api({
  baseUrl: 'https://functions.yandexcloud.net/d4emmiecboqc61f8q1kk',
  headers: {
    'Accept': '*/*',
    'Content-Type': 'text/plain'
  },
});


const raschetForm = document.forms.formRaschetPopup;
const raschetSubmitButton = raschetForm.querySelector('.raschet-bem__submit-button');

const raschetValidatorForm = new FormValidatorNew(raschetValidatorConfig, raschetForm);
raschetValidatorForm.enableStepValidation();

export const popupRaschet = new PopupWithBigForm({
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
}, '.popup-raschet', '.raschet-bem', '.raschet-bem__input');

popupRaschet.setEventListeners();

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