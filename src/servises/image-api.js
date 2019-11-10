const fetchArticles = (keyWord = '', pageNumber = 1) => {
  const key = '13651482-b515d2fef8506cbb1df3a0f96';
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${keyWord}&page=${pageNumber}&per_page=12&key=${key}`,
  )
    .then(response => response.json())
    .then(data => data.hits);
};
export default fetchArticles;
