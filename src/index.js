import './styles.css';
import fetchArticles from './js/fetch-articles';
import updateArticlesMarkup from './js/update-articles-markup';

const refs = {
  articlesContainer: document.querySelector('.js-articles'),
  searchForm: document.querySelector('.js-search-form'),
};

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  const inputValue = form.elements.query.value;

  refs.articlesContainer.innerHTML = '';
  form.reset();

  fetchArticles(inputValue).then(updateArticlesMarkup);
});
