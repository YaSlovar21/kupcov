//import zatonUfa from '../../images/projects/ufa_zaton.png';
//import timashevskCondit from '../../images/projects/timashevsk_condit.png';
//import ufaUmnDom from '../../images/projects/ufa_umn_dom.png';

const zatonUfa = new URL('../../images/projects/ufa_zaton.png', import.meta.url);
const timashevskCondit = new URL('../../images/projects/timashevsk_condit.png', import.meta.url);
const ufaUmnDom = new URL('../../images/projects/ufa_umn_dom.png', import.meta.url);

const ti025Img = new URL('../../images/descTO/ti025.png', import.meta.url);
const ti077Img = new URL('../../images/descTO/ti077.png', import.meta.url);
const ti13Img = new URL('../../images/descTO/ti13.png', import.meta.url);
const ti18Img = new URL('../../images/descTO/ti18.png', import.meta.url);
const ti28Img = new URL('../../images/descTO/ti28.png', import.meta.url);
const ti45Img = new URL('../../images/descTO/ti45.png', import.meta.url);
const ti52Img = new URL('../../images/descTO/ti52.png', import.meta.url);
const ti65Img = new URL('../../images/descTO/ti65.png', import.meta.url);
const ti82Img = new URL('../../images/descTO/ti82.png', import.meta.url);
const ti95Img = new URL('../../images/descTO/ti95.png', import.meta.url);

export const callbackFormId = 'mdoygyzz';


//секция, куда загружаются карточки проектов
export const projectsContainerSelector = '.projects__items';

//template карточки проекта
export const projectTemplateSelector = "#project-template";
export const projectHorizontalTemplateSelector = "#project-horizontal-template";

export const cardArticleConfig = {
  cardArticleTemplateSelector: '#article-template',
  articleCardSelector: '.infoitem',
  articleTagsSectionSelector: '.infoitem__header',
  articleTagClass: 'infoitem__span-button',
  articleHeadSelector: '.infoitem__name',
  articleDescSelector: '.infoitem__description',
  articleLinkSelector: '.infoitem__link',
  cardListSection: '.cards-js-rendered',
}

/*
      name: item.name,
      link: item.link,
      to: item.model,
      naznach: item.naznach,
      q: item.q,
*/
export const initialProjects = [
    {
      name: "Котельная в квартале 34, г. Уфа, жилой район «Затон-Восточный»",
      link: zatonUfa,
      to: "ТИ82-201",
      naznach: "Отопление, ГВС",
      q: "17500 кВт",
      animateClass: 'animate__fadeIn',
    },
    {
      name: "Кондитерский комбинат «Кубань», г. Тимашевск, Краснодарский край",
      link: timashevskCondit,
      to: "ТИ52-77",
      naznach: "ГВС",
      q: "3,5 Гкал/ч",
      animateClass: 'animate__fadeIn',
    },
    {
      name: "БИТП Новый умный дом в г. Уфа, ул. Злобина, 31",
      link: ufaUmnDom,
      to: "ТИ13 (31-53 пластин)",
      naznach: "Отопление, ГВС",
      q: "от 0.3 до 0.5 Гкал/ч",
      animateClass: 'animate__fadeIn',
    },
];

const blogPath = 'blog-proizvodstva'

export const tagsAliases = {
  'gkh' : 'ЖКХ',
  'project': 'Проект',
  'btp': 'БТП',
  'food': 'Пищевые',
  'example': 'Пример расчёта',
  'prod': 'Продукция',
}

export const initialArticles = [
  {
    tags: ['gkh', 'prod'],
    linkPath: `/${blogPath}/plastinchatye-teploobmenniki-otopleniya.html`,
    heading: 'Пластинчатые теплообменники отопления',
    description: 'Производство теплообменников для отопления',
  },
  {
    tags: ['prod', 'food'],
    linkPath: `/${blogPath}/plastinchatyy-pasterizator.html`,
    heading: 'Пластинчатые пастеризаторы',
    description: 'Производство пластинчатых пастеризаторов пищевых жидкостей',
  },
 /* {
    tags: ['prod', 'food'],
    linkPath: `/${blogPath}/plastinchatye-teploobmenniki-otopleniya.html`,
    heading: 'Пластинчатые охладители',
    description: 'Охлаждение жидкости в потоке, возможно пищевое исполнение',
  },*/
  {
    tags: ['gkh', 'project'],
    linkPath: `/${blogPath}/teploobmenniki-gvs-object-u-timashevsk.html`,
    heading: 'Объект: Кондитерский комбинат Кубань (г. Тимашевск)',
    description: 'Теплообменник ТИ52-77 мощностью 3,5 Гкал/ч',
  },
  {
    tags: ['gkh', 'project'],
    linkPath: `/${blogPath}/teploobmenniki-gvs-object-p-zaton-vostok.html`,
    heading: 'Объект: Котельная в г. Уфа, жилой район «Затон-Восточный»',
    description: 'Теплообменник ТИ82-201, мощность 17500 кВт',
  },
  {
    tags: ['gkh', 'project'],
    linkPath: `/${blogPath}/teploobmenniki-gvs-object-p-umnii-dom.html`,
    heading: 'Объект: Умный дом в г. Уфа (теплообменники для ИТП)',
    description: 'Теплообменники ТИ13 для гвс, отопления, вентилиции',
  },
  {
    tags: ['prod', 'food'],
    linkPath: `/${blogPath}/mnogosektsionnye-teploobmenniki.html`,
    heading: 'Многосекционные теплообменники',
    description: 'Многосекционное исполнение теплообменников',
  },
  {
    tags: ['gkh', 'project', 'example'],
    linkPath: `/${blogPath}/plastinchatye-teploobmenniki-gvs.html`,
    heading: 'Пластинчатые теплообменники для гвс',
    description: 'Производство теплобменников горячего водоснабжения',
  },
  {
    tags: ['gkh'],
    linkPath: `/${blogPath}/preimushchestva-plastinchatykh-teploobmennikov.html`,
    heading: 'Преимущества пластинчатых теплообменников',
    description: 'Преимущества теплообменных аппаратов пластинчатого типа',
  },
  /*{
    tags: ['gkh', 'btp'],
    linkPath: `/${blogPath}/plastinchatye-teploobmenniki-otopleniya.html`,
    heading: '10Проектирование блочных тепловых пунктов',
    description: 'Квалифицированные инженеры завода по производству теплообменников спроектируют БТП',
  },*/
];


export const initialHeatEx = {
  "ti-025": {
    name: "ТИ 025",
    img: ti025Img,
    desc: "ТИ025 – имеет широкую гамму подключения подтрубков: Ду20, Ду25, Ду32, Ду40. Применение: небольшие промышленные помещения, коттеджи, здания детских садов, подогрев бассейнов, обогрев гаражных помещений.",
    link3d: "https://disk.yandex.ru/d/p4EH75u--S1Dzg",
    baseUrl: "/catalog/ti-025.html",
  },
  "ti-077": {
    name: "ТИ 077",
    img: ti077Img,
    desc: `ТИ077 – имеет широкую гамму подключения подтрубков: Ду25, Ду32, Ду40.
    Подходит для задач ЖКХ на типовые 5ти этажные дома.
    Типоразмер также часто применяется в пищевой отрасли. (в т.ч. в многоступенчатом исполнении)`,
    link3d: "https://disk.yandex.ru/d/kEiGbHo7Fi8Uwg",
    baseUrl: "/catalog/ti-077.html",
  },
  "ti-13": {
    name: "ТИ 13",
    img: ti13Img,
    desc: `ТИ13 – имеет подключения подтрубков: Ду50, Ду65.
    Применение: если ориентироваться на жилые дома, данный теплообменник подходит на типовой 4-6 подъездный 9-ти этажный жилой дом.`,
    link3d: "https://disk.yandex.ru/d/7C26Ov2CVbgl6w",
    baseUrl: "/catalog/ti-13.html",
  },
  "ti-18": {
    name: "ТИ 18",
    img: ti18Img,
    desc: `ТИ18 – имеет гамму подключения подтрубков: Ду50, Ду65.
    Применение: если ориентироваться на жилые дома, данный теплообменник зачастую используются в многоквартирных высотных домах.
    Теплообменный аппарат похож на ТИ13, но в отличие от него лучше справляется с более жесткими температурными режимами`,
    link3d: "https://disk.yandex.ru/d/O2lzhXAOWaA4ug",
    baseUrl: "/catalog/ti-18.html",
  },
  "ti-16-5": {
    name: "ТИ 16,5",
    img: "",
    desc: `ТИ16,5 – имеет подключение подтрубков ДУ50, ДУ65, ДУ80.
    Если температурные графики не типовые (не отопление и гвс), с небольшим перепадом температур,
    специфические среды, программа расчёта вероятно подберет данный теплообменник.
    Зачастую он подбирается, когда требуется охладить жидкость на 1-3 градуса при небольших тепловых нагрузках`,
    link3d: "",
    baseUrl: "/catalog/ti-16-5.html",
  },
  "ti-28": {
    name: "ТИ 28",
    img: ti28Img,
    desc: "ТИ28 – имеет подключения подтрубков: ДУ100, ДУ125.",
    link3d: "https://disk.yandex.ru/d/3lo5g4MpzvYFcA",
    baseUrl: "/catalog/ti-28.html",
  },
  "ti-45": {
    name: "ТИ 45",
    img: ti45Img,
    desc: "ТИ45 – имеет подключения подтрубков: ДУ100, ДУ125",

    link3d: "https://disk.yandex.ru/d/3lo5g4MpzvYFcA",
    baseUrl: "/catalog/ti-45.html",
  },
  "ti-65": {
    name: "ТИ 65",
    img: ti65Img,
    desc: "ТИ65 – имеет подключения подтрубков: ДУ100, ДУ125.",
    link3d: "https://disk.yandex.ru/d/1c62zYE1I9yvyA",
    baseUrl: "/catalog/ti-65.html",
  },
  "ti-52": {
    name: "ТИ 52",
    img: ti52Img,
    desc: `ТИ52 – имеет подключение ДУ150.
    Применение: промышленные заводы, центральные тепловые пункты (ЦТП), центральные котельные.
    Масштаб обогрева - микрорайоны, большие торговые и бизнес центры (крупной квадратуры от 15 000 квадратных метров и более)`,
    link3d: "https://disk.yandex.ru/d/1c62zYE1I9yvyA",
    baseUrl: "/catalog/ti-52.html",
  },
  "ti-82": {
    name: "ТИ 82",
    img: ti82Img,
    desc: `ТИ82 – имеет подключение ДУ150. В отличие от ТИ52 имеет более удлиненную пластину, что позволяет удерживать больший перепад температур.
    Применение аналогичное ТИ52: промышленные заводы, центральные тепловые пункты (ЦТП), котельные микрорайонов.
    Зачастую применяется также в больших торговых и бизнес центрах (крупной квадратуры от 15 000 квадратных метров и более).`,
    link3d: "https://disk.yandex.ru/d/1c62zYE1I9yvyA",
    baseUrl: "/catalog/ti-82.html",
  },
  "ti-95": {
    name: "ТИ 95",
    img: ti95Img,
    desc: `ТИ95 – имеет подключения подтрубков: ДУ200, ДУ250.
    Применение: ТЭЦ. (Обогревается совокупность микрорайонов)`,

    link3d: "",
    baseUrl: "/catalog/ti-95.html",
  },
  "ti-116": {
    name: "ТИ 116",
    img: "",
    desc: `ТИ116 – имеет подключения подтрубков: ДУ200, ДУ250.
    Применение: ТЭЦ. (Обогревается совокупность микрорайонов)`,
    link3d: "",
    baseUrl: "/catalog/ti-116.html",
  },
};
export const initialPartners = [
  {
    name: 'Чита',
    htmlData: {
      nameOfPartner: 'ООО \"Интерсервис\"',
      telephoneNumbers: ['8-914-130-30-30'],
    }
  },
  {
    name: 'Архангельск',
    htmlData: {
      nameOfPartner: 'ООО \"Теплогазстрой\"',
      telephoneNumbers: ['8(8182)-639-739'],
      site: 'http://tgs29.ru/',
    },
  },
  {
    name: 'Краснодар',
    htmlData: {
      nameOfPartner: 'ООО \"Ютермо\"',
      telephoneNumbers: ['8 800 700-09-58', '+7 (905) 406-75-76'],
      site: 'https://utermo.ru/',
    },
  },
  {
    name: 'Астрахань',
    htmlData: {
      nameOfPartner: 'ООО \"Ютермо\"',
      telephoneNumbers: ['8 800 700-09-58', '+7 (905) 406-75-76'],
      site: 'https://utermo.ru/',
    },
  },
  {
    name: 'Ростов-на-Дону',
    htmlData: {
      nameOfPartner: 'ООО \"Ютермо\"',
      telephoneNumbers: ['8 800 700-09-58', '+7 (905) 406-75-76'],
      site: 'https://utermo.ru/',
    },
  },
  {
    name: 'Севастополь',
    htmlData: {
      nameOfPartner: 'ООО \"Ютермо\"',
      telephoneNumbers: ['8 800 700-09-58', '+7 (905) 406-75-76'],
      site: 'https://utermo.ru/',
    },
  },
  {
    name: 'Ставрополь',
    htmlData: {
      nameOfPartner: 'ООО \"Ютермо\"',
      telephoneNumbers: ['8 800 700-09-58', '+7 (905) 406-75-76'],
      site: 'https://utermo.ru/',
    },
  },
  {
    name: 'Махачкала',
    htmlData: {
      nameOfPartner: 'ООО \"Ютермо\"',
      telephoneNumbers: ['8 800 700-09-58', '+7 (905) 406-75-76'],
      site: 'https://utermo.ru/',
    },
  },
  {
    name: 'Волгоград',
    htmlData: {
      nameOfPartner: 'ООО \"Ютермо\"',
      telephoneNumbers: ['8 800 700-09-58', '+7 (905) 406-75-76'],
      site: 'https://utermo.ru/',
    },
  },
  {
    name: 'Новосибирск',
    htmlData: {
      nameOfPartner: 'ООО \"Инженерные системы\"',
      telephoneNumbers: ['+7-903-900-36-63'],
    },
  },
  {
    name: 'Искитим',
    htmlData: {
      nameOfPartner: 'ООО \"Инженерные системы\"',
      telephoneNumbers: ['+7-903-900-36-63'],
    },
  },
  {
    name: 'Омск',
    htmlData: {
      nameOfPartner: 'ООО \"Термополис+\"',
      telephoneNumbers: ['+7(3812) 660-137'],
    },
  },
  {
    name: 'Оренбург',
    htmlData: {
      nameOfPartner: 'ООО \"Отопление качество\"',
      telephoneNumbers: ['8-922-555-75-17'],
    },
  },
  {
    name: 'Томск',
    htmlData: {
      nameOfPartner: 'ООО \"Амито\"',
      telephoneNumbers: ['8 (3822) 978-933'],
      site: 'https://amito-t.ru/',
    },
  },
  {
    name: 'Новокузнецк',
    htmlData: {
      nameOfPartner: 'ООО \"Амито\"',
      telephoneNumbers: ['8 (3822) 978-933'],
      site: 'https://amito-t.ru/',
    },
  },
  {
    name: 'Кемерово',
    htmlData: {
      nameOfPartner: 'ООО \"Амито\"',
      telephoneNumbers: ['8 (3822) 978-933'],
      site: 'https://amito-t.ru/',
    },
  },
  {
    name: 'Уфа',
    htmlData: {
      nameOfPartner: 'ООО \"Партнер\"',
      telephoneNumbers: ['+7(347) 236-05-34', '+7(347)236-65-38 '],
      site: 'http://www.partnerufa.ru',
    },
  },
  {
    name: 'Стерлитамак',
    htmlData: {
      nameOfPartner: 'ООО \"Партнер\"',
      telephoneNumbers: ['+7(347) 236-05-34', '+7(347)236-65-38 '],
      site: 'http://www.partnerufa.ru',
    },
  },
  {
    name: 'Владивосток',
    htmlData: {
      nameOfPartner: 'ООО \"Солид ДВ\"',
      telephoneNumbers: ['+7-902-482-7837', '+7-902-480-5454'],
    },
  },
  {
    name: 'Иркутск',
    htmlData: {
      nameOfPartner: 'ООО \"Константа\"',
      telephoneNumbers: ['+7 (3952) 42-87-03 '],
    },
  },
  {
    name: 'Ижевск',
    htmlData: {
      nameOfPartner: 'ООО \"Отопление качество\"',
      telephoneNumbers: ['+7 (3412) 27-18-78'],
    },
  },
  {
    name: 'Вологда',
    htmlData: {
      nameOfPartner: 'ООО \"Протемол\"',
    },
  },
  {
    name: 'Санкт-Петербург',
    htmlData: {
      nameOfPartner: 'ООО \"Хортэк-ОПТ\"',
      telephoneNumbers: ['+7 (812) 703-42-30'],
    },
  },
];

export const ESC_CODE = 'Escape';

//секция, куда загружаются карточки проектов
export const cardsContainerSelector = '.projects__items';

//template карточки проекта
export const cardTemplateSelector = "#project-template";

export const partnersSectionConfig = {
  containerSelector: '.map__list',
  itemTemplateSelelector: '#partner-item-template',
  activeClass: 'map__list-item_active',
}

//селекторы модальных окон
export const popupImageSelector = '.popup-viewport';
export const callBackPopupSelector = '.popup-callback';
export const popupWithToSelector = '.popup-to';
export const popupWithMenuSelector = '.popup-menu';
//формы
/*
export const formCallBack= document.forms.formCallBack;
export const callbackSubmitButton = formCallBack.querySelector('.popup__button-save');

//кнопки открытия модальных окон
export const callBackPopupOpenButton = document.querySelector('.popup-callback-button');
export const popupWithSertifOpenButton = document.querySelector('.about__doc');

//интеактивные пластины
export const platesSvg = document.querySelector('.plates__svg');
*/


//конфиги


// конфиг селекторов в модальном окне с картиной и подписью
export const popupImageSelectorsCongig = {
    popupImageSelector: '.popup__image',
    popupImageDescSelector: '.popup__image-description'
}


export const popupToConfig = {
  popupImageToSelector: '.popup__to-img',
  popupImageContainerSelector: '.popup__to-img-container',
  popupImageNameSelector: '.popup__to-name',
  popupImageDescSelector: '.popup__to-desc',
  popupImageLink3dSelector: '.popup__to-3dlink',
}

export const formValidatorConfig = {
  inputSelector: '.raschet-bem__input',
  submitButtonSelector: '.button-bem',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'raschet-bem__input_type_error',
  errorClass: 'raschet-bem__input-error_visible'
}

export const raschetValidatorConfig = {
  inputSelector: '.raschet-bem__input',
  submitButtonSelector: '.raschet-bem__submit-button',
  inactiveButtonClass: 'raschet-bem__submit-button_disabled',
  inputErrorClass: 'raschet-bem__input_type_error',
  errorClass: 'raschet-bem__input-error_visible'
}

export const lineformConfig = {
  inputSelector: '.lineform__input',
  submitButtonSelector: '.lineform__button-save',
  inactiveButtonClass: 'raschet-bem__submit-button_disabled',
  inputErrorClass: 'raschet-bem__input_type_error',
  errorClass: 'raschet-bem__input-error_visible'
}

