const key = '18518367-60788b25c9bdd8e2c754a390a';

function fetchArticles(searchQuery) {
  const url = `https://pixabay.com/api/?key=${key}&q=${searchQuery}&per_page=20`;

  return fetch(url)
    .then(res => res.json())
    .then(data => data.hits);
}

export default fetchArticles;
