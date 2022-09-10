// const array = [1, 2, 3];
// console.log(array);

// const constructorArray = new Array('Hi', 'Welcome'); // single number passes length of the array (can omit the new keyword)
// console.log(constructorArray);

// const arrayOf = Array.of(1, 2);

// const listItems = document.querySelector('li'); // array like object

// // does not take multiple numbers and converts an array like object into an array
// const arrayFrom = Array.from(listItems);

// //  items to pass into an array:
// const hobbies = ['cooking', 'sports']; //strings
// const personalData = [30, 'max', { details: [] }]; // numbers, objects, mixed data types

// const analyticsData = [
// 	[1, 2, 3],
// 	[-5.4, 2.1],
// ]; //multi dimensional array

// // example
// for (const data of analyticsData) {
// 	for (const dataPoint of data) {
// 		console.log(dataPoint);
// 	}
// }

const hobbies = ['cooking', 'sports'];
hobbies.push('Reading'); // adds to an array
hobbies.unshift('Coding'); // adds to the beginning of the array
hobbies.pop(); //removes the end item of the array
hobbies.shift(); // removes to the beginning of the item

hobbies[1] = 'surfing'; // adds an element to that specific element. if an element is there it replaces it.
// hobbies[5] = 'can use this' // adds an element in the 5 index anything in between is an empty index

// hobbies.splice(0, 0, 'hello') // will insert in the 0 index
hobbies.splice(1, 0, 'hello'); // will insert in the 1 index and move everything over

// will remove in the 1 index  because of the 0 is where it starts in the array the second number tells you how many to delete from the array
const removedElements = hobbies.splice(0, 1); // returns the removed elements

const removedFromTheRight = hobbies.splice(-1, 1);
console.log(hobbies);
