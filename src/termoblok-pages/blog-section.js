import './blog-section.css';

import {
  initialArticles,
  cardArticleConfig,
  tagsAliases
} from '../js/utils/constants.js';

import { isFullInclude ,articlesMapper} from '../js/utils/utils.js';

import CardArticle from '../js/components/CardArticle.js'
import SectionPaginator from '../js/components/SectionPaginator';

const moreButton = document.querySelector('.infocards__more-button');


function createArticleCard(item) {
  const card = new CardArticle({
    tags: item.tags,
    linkPath:item.linkPath,
    title: item.heading,
    description: item.description,
    // для супер класса
    cardTemplateSelector: cardArticleConfig.cardArticleTemplateSelector,
    cardSelector: cardArticleConfig.articleCardSelector,
    //animateClass: item.animateClass,
  }, cardArticleConfig, tagsAliases);
  const cardToAdd = card.generateCard()
  return cardToAdd;
}

const cardsList = new SectionPaginator({
  data: initialArticles,
  renderer: (item) => {
    const card = createArticleCard(item);
    cardsList.appendItem(card);
    },
  },
  cardArticleConfig.cardListSection,
  moreButton,
);

const formFilter = document.forms.filterForm;
cardsList.renderItems();

formFilter.addEventListener("change", () => {
  const checkedFromForm = Array.from(formFilter.elements.filterbox).filter((item)=>{
    return item.checked;
  }).map((item)=> {
    return item.value;
  });
  console.log(checkedFromForm);
  if (checkedFromForm.length > 0) {
    cardsList.renderFiltered(articlesMapper(checkedFromForm, initialArticles));
  } else {
    cardsList.renderFiltered(initialArticles);
  };
});

//const articlesToRender = articlesMapper(['btp', 'project'], initialArticles);
//console.log(articlesToRender);