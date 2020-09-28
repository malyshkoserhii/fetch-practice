const apiKey = '39b8da748fcd4a928a1eef796d01c757';

function fetchArticles(searchQuery) {
  const url = `http://newsapi.org/v2/everything?q=${searchQuery}&language=en&apiKey=${apiKey}`;
  const options = {
    headers: { Authorization: apiKey },
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(data => data.articles);
}

export default fetchArticles;
