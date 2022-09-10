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

const updateUI = () => {
	if (movies.length === 0) {
		entryTextSelection.style.display = 'block';
	} else {
		entryTextSelection.style.display = 'none';
	}
};

const renderNewMovieElement = (title, imageUrl, rating) => {
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
	const ul = document.getElementById('movie-list');
	ul.append(newMovieElement);
};

const toggleMovieModal = () => {
	addMovieModal.classList.toggle('visible');
	toggleBackdrop();
};

const toggleBackdrop = () => {
	backdrop.classList.toggle('visible');
};

const cancelAddMovieHandler = () => {
	toggleMovieModal();
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
		title: titleValue,
		image: imageUrlValue,
		rating: ratingValue,
	};
	movies.push(newMovie);
	console.log(movies);
	toggleMovieModal();
	clearMovieInput();
	renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
	updateUI();
};

const backdropClickHandler = () => {
	toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);

backdrop.addEventListener('click', backdropClickHandler);

cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);

confirmAddMovieButton.addEventListener('click', addMovieHandler);
