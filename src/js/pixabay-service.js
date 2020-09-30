const key = '18518367-60788b25c9bdd8e2c754a390a';

export default {
  searchQuery: '',
  page: 1,
  fetchArticles() {
    const url = `https://pixabay.com/api/?key=${key}&q=${this.searchQuery}&page=${this.page}&per_page=4`;

    return fetch(url)
      .then(res => res.json())
      .then(data => {
        this.incrementPage();

        return data.hits;
      });
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
