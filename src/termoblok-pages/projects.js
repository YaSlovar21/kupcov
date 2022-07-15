import Section from '../js/components/Section.js';



const defaultCardList = new Section({
  data: items,
  renderer: (item) => {
    const card = new DefaultCard(item, '.default-card');
    const cardElement = card.generateCard();
    defaultCardList.setItem(cardElement);
  }
}, cardListSelector);

const horizontalCardList = new Section({
  data: items,
  renderer: (item) => {
    const card = new HorizontalCard(item, '.horizontal-card');
    const cardElement = card.generateCard();
    horizontalCardList.setItem(cardElement);
  }
}, cardListSelector);


