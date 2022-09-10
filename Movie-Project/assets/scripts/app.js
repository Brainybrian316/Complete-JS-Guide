// * alternatives to selecting dom elements:
// const addMovieModal = document.querySelector('add-modal');
// const addMovieModal = document.body.children[1];
// const startAddMovieButton = document.querySelector('header').lastElementChild;

const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');

const toggleMovieModal = () => {
	addMovieModal.classList.toggle('visible');
	toggleBackdrop();
};

const toggleBackdrop = () => {
	backdrop.classList.toggle('visible');
};

const backdropClickHandler = () => {
	toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);

backdrop.addEventListener('click', backdropClickHandler);
