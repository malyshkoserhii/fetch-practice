import pixabayService from './js/pixabay-service';
import updateArticlesMarkup from './js/update-articles-markup';
import refs from './js/refs';
import './styles.css';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  pixabayService.query = form.elements.query.value;

  if (pixabayService.query !== '') {
    refs.articlesContainer.innerHTML = '';

    pixabayService.resetPage();
    fetchPhotoes();
    form.reset();
  }
});

refs.loadMoreBtn.addEventListener('click', fetchPhotoes);

function fetchPhotoes() {
  refs.loadMoreBtn.classList.add('is-hidden');
  refs.spinner.classList.remove('is-hidden');

  pixabayService
    .fetchArticles()
    .then(articles => {
      updateArticlesMarkup(articles);
      refs.loadMoreBtn.classList.remove('is-hidden');
    })
    .finally(() => {
      refs.spinner.classList.add('is-hidden');
    });
}
