// * alternatives to selecting dom elements:
// const addMovieModal = document.querySelector('add-modal');
// const addMovieModal = document.body.children[1];
// const startAddMovieButton = document.querySelector('header').lastElementChild;

const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
// alternative to above
//  const userInputs = addMovieModal.getElementsByTagName('input');
const movies = [];
const entryTextSelection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const updateUI = () => {
	if (movies.length === 0) {
		entryTextSelection.style.display = 'block';
	} else {
		entryTextSelection.style.display = 'none';
	}
};

const deleteMovieHandler = (movieId) => {
	let movieIndex = 0;
	for (const movie of movies) {
		if (movie.id === movieId) {
			break;
		}
		movieIndex++;
	}
	movies.splice(movieIndex, 1);
	const ul = document.getElementById('movie-list');
	ul.children[movieIndex].remove();
	// alternative to above
	// ul.removeChild(ul.children[movieIndex]);
	closeMovieDeletionModal();
};

const closeMovieDeletionModal = () => {
	toggleBackdrop();
	deleteMovieModal.classList.remove('visible');
};

const startDeleteMovieHandler = (movieId) => {
	deleteMovieModal.classList.add('visible');
	toggleBackdrop();
	const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
	let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

	confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

	confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

	cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal);

	cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
	confirmDeletionButton.addEventListener('click', deleteMovieHandler.bind(null, movieId));
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
	const newMovieElement = document.createElement('li');
	newMovieElement.className = 'movie-element';
	newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
      </div>
      <div class="movie-element__info">
        <h2>${title}</h2>
          <p>${rating}/5 stars</p>
      </div>
  `;
	newMovieElement.addEventListener('click', startDeleteMovieHandler.bind(null, id));
	const ul = document.getElementById('movie-list');
	ul.append(newMovieElement);
};

const showMovieModal = () => {
	addMovieModal.classList.add('visible');
	toggleBackdrop();
};

const closeMovieModal = () => {
	addMovieModal.classList.remove('visible');
};

const toggleBackdrop = () => {
	backdrop.classList.toggle('visible');
};

const cancelAddMovieHandler = () => {
	closeMovieModal();
	toggleBackdrop();
	clearMovieInput();
};

const clearMovieInput = () => {
	for (const usrInput of userInputs) {
		usrInput.value = '';
	}
};

const addMovieHandler = () => {
	const titleValue = userInputs[0].value;
	const imageUrlValue = userInputs[1].value;
	const ratingValue = userInputs[2].value;

	if (
		titleValue.trim() === '' ||
		imageUrlValue.trim() === '' ||
		ratingValue.trim() === '' ||
		+ratingValue < 1 || // alternative to writing parseInt
		+ratingValue > 5
	) {
		alert('Please enter valid values. (rating between 1 and 5). ');
		return;
	}
	const newMovie = {
		id: Math.random().toString(),
		title: titleValue,
		image: imageUrlValue,
		rating: ratingValue,
	};
	movies.push(newMovie);
	console.log(movies);
	closeMovieModal();
	toggleBackdrop();
	clearMovieInput();
	renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
	updateUI();
};

const backdropClickHandler = () => {
	closeMovieModal();
	closeMovieDeletionModal();
	clearMovieInput();
};

startAddMovieButton.addEventListener('click', showMovieModal);

backdrop.addEventListener('click', backdropClickHandler);

cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);

confirmAddMovieButton.addEventListener('click', addMovieHandler);
