// const listItemElements = document.querySelectorAll('li');
const listItemElements = document.getElementsByTagName('li'); //most commonly used

for (const listItemEl of listItemElements) {
	console.dir(listItemEl);
}

const h1 = document.getElementById('main-title');

h1.textContent = 'Some new title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

const body = document.body;

// *dom traversal
// const ul = document.body.firstElementChild.nextElementSibling;
// const firstLi = ul.firstElementChild;
// console.log(firstLi);

// *dom Styling

const section = document.querySelector('section');
// section.style.backgroundColor = 'blue';
section.className = 'red-bg';

const button = document.querySelector('button');

button.addEventListener('click', () => {
	/* className version
	// if (section.className === 'red-bg visible') {
	// 	section.className = 'red-bg invisible';
	// } else {
	// 	section.className = 'red-bg visible';
	// }
	// ternary operator
	// section.className =
	// 	section.className === 'red-bg visible' ? 'red-bg invisible' : 'red-bg visible';
	// */
	section.classList.toggle('invisible');
});
