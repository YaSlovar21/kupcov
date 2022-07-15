export default class Partner {
    constructor({name, htmlData, classActive, handleItemClick}, projectItemSelector) {
        this._name = name;
        this._itemTemplateSelelector = projectItemSelector;
        this._htmlData = htmlData;
        if (htmlData.nameOfPartner) {
          this._nameOfPartner = htmlData.nameOfPartner;
        } else {
          this._nameOfPartner = '';
        }
        if (htmlData.telephoneNumbers) {
          this._telephoneNumbers = htmlData.telephoneNumbers;
        } else {
          this._telephoneNumbers = '';
        }
        if (htmlData.site) {
          this._site = htmlData.site;
        } else {
          this._site = '';
        }
        //console.log(this);
        //коллбэк
        this._handleItemClick = handleItemClick;
        this._activeClass = classActive;
    }

    _getItemTemplate() {
        const itemElement = document
            .querySelector(this._itemTemplateSelelector)
            .content
            .querySelector('.map__list-item')
            .cloneNode(true);

        return itemElement;
    }

    generatePartner() {
        this._element = this._getItemTemplate();
        /*Задать название и атрибут data-html*/
        //this._element.setAttribute('data-html', this._htmlData);
        this._element.textContent = this._name;
        this._setEventListeners();
        return this._element;
    }

    _toogleActive() {
        this._element.classList.add(this._activeClass);
    }

    _setEventListeners() {
        this._element.addEventListener('mousedown', ()=> {
            this._handleItemClick(this._nameOfPartner, this._telephoneNumbers, this._site);
            this._toogleActive();
        });
    }
}