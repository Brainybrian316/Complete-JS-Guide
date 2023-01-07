const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movieList.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    // *object destructuring
    const { info, ...otherProperties } = movie;
    console.log(otherProperties);
    // *destructure with new name
    const { title: movieTitle } = info;
    // ^destructure a function with bind for future execution
    let { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    // @alternative using call method  to execute func right away
    let text = getFormattedTitle().call(movie) + ' - ';
    // *dynamic user property
    for (const key in info) {
      if (key !== 'title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
    return;
  }

  const newMovie = {
    info: {
      // if key name and value name are the same you can use this syntax
      title,
      // we don't know extra name from user so we this nifty syntax
      [extraName]: extraValue,
    },
    id: Math.floor(Math.random() * 10),
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    },
  };

  movies.push(newMovie);
  renderMovies();
  console.log(movies);
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
