import Partner from '../js/components/Partner.js';
import Section from '../js/components/Section.js';

import './map.css'

import {
  initialPartners,
  partnersSectionConfig,
} from '../js/utils/constants.js';

initialPartners.sort(function(a,b) {
  const aSecondName = a.name.toLowerCase();
  const bSecondName = b.name.toLowerCase();
  if (aSecondName > bSecondName) return 1;
  if (aSecondName < bSecondName) return -1;
  return 0;
});

const mapSection = document.querySelector('.map');
const mapList = mapSection.querySelector('.map__list');


const dinamicInfoPopup = mapSection.querySelector('.map__popup');
const popupInfoCloseButton = dinamicInfoPopup.querySelector(".map__popup-close");
const dinamicInfoPopupContainer = dinamicInfoPopup.querySelector('.map__popup-container');

function createPartner(dataJson) {
  const partner = new Partner({
    name: dataJson.name,
    htmlData: dataJson.htmlData,
    classActive: partnersSectionConfig.activeClass,
    handleItemClick: (nameOfPartner, telephoneNumbers, site) => {
      //(desc, link) передаем во внутреннем методе карточки
      popupInfoOpen(nameOfPartner, telephoneNumbers, site);
    },
  }, partnersSectionConfig.itemTemplateSelelector);
  const partnerToAdd = partner.generatePartner()
  return partnerToAdd;
}

const partnerList = new Section({
  data: initialPartners,
  renderer: (itemData) => {
    const partner = createPartner(itemData);
    partnerList.appendItem(partner);
  }
}, partnersSectionConfig.containerSelector);

partnerList.renderItems();

function popupInfoOpen(nameOfPartner, telephoneNumbers, site) {
  if (nameOfPartner !== '') {
    const listItem = document.createElement('li');
    listItem.classList.add('map__container-li');
    listItem.textContent = nameOfPartner;
    listItem.setAttribute('style','font-weight:bold; margin-bottom:15px;');
    dinamicInfoPopupContainer.append(listItem);
  }
  if (telephoneNumbers !== '') {
    const partnerEl = telephoneNumbers.map(el => {
      const listItem = document.createElement('li');
      listItem.classList.add('map__container-li');
      listItem.textContent = el;
      listItem.setAttribute('style','font-weight:300; margin-bottom:5px;');
      return listItem;
    });
    //partnerEl[-1].setAttribute('style','font-weight:bold; margin-bottom:10px;');
    //dinamicInfoPopupContainer.innerHTML= '<div class="animate__animated animate__fadeInUp">'+dataHtml+'</div>';
    dinamicInfoPopupContainer.append(...partnerEl);
  }
  if (site !== '') {
    const listItem1 = document.createElement('li');
    listItem1.classList.add('map__container-li');
    const link = document.createElement('a');
    link.textContent = site;
    link.href = site;
    listItem1.append(link);
    listItem1.setAttribute('style','margin-top:10px;');
    dinamicInfoPopupContainer.append(listItem1);
  }
  dinamicInfoPopup.classList.add('map__popup_opened');
}

popupInfoCloseButton.addEventListener('click', function () {
  dinamicInfoPopup.classList.remove('map__popup_opened');
  dinamicInfoPopupContainer.innerHTML ='';
  let mapActive = mapList.querySelector('.map__list-item_active')
  if (mapActive) {
    mapActive.classList.remove('map__list-item_active');
  }
});