const array = [1, 2, 3];
console.log(array);

const constructorArray = new Array('Hi', 'Welcome'); // single number passes length of the array (can omit the new keyword)
console.log(constructorArray);

const arrayOf = Array.of(1, 2);

const listItems = document.querySelector('li'); // array like object

// does not take multiple numbers and converts an array like object into an array
const arrayFrom = Array.from(listItems);

//  items to pass into an array:
const hobbies = ['cooking', 'sports']; //strings
const personalData = [30, 'max', { details: [] }]; // numbers, objects, mixed data types

const analyticsData = [
	[1, 2, 3],
	[-5.4, 2.1],
]; //multi dimensional array

// example
for (const data of analyticsData) {
	for (const dataPoint of data) {
		console.log(dataPoint);
	}
}
