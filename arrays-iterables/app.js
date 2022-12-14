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

// const hobbies = ['cooking', 'sports'];
// hobbies.push('Reading'); // adds to an array
// hobbies.unshift('Coding'); // adds to the beginning of the array
// hobbies.pop(); //removes the end item of the array
// hobbies.shift(); // removes to the beginning of the item

// hobbies[1] = 'surfing'; // adds an element to that specific element. if an element is there it replaces it.
// // hobbies[5] = 'can use this' // adds an element in the 5 index anything in between is an empty index

// // hobbies.splice(0, 0, 'hello') // will insert in the 0 index
// hobbies.splice(1, 0, 'hello'); // will insert in the 1 index and move everything over

// // will remove in the 1 index  because of the 0 is where it starts in the array the second number tells you how many to delete from the array
// const removedElements = hobbies.splice(0, 1); // returns the removed elements

// const removedFromTheRight = hobbies.splice(-1, 1);
// console.log(hobbies);

// const results = [1, 5.3, 1.5, 10.0, 1.5 - 5, 10];
// const storedResults = results.slice(); //returns a copy of the array
// const specificResultsOfTest = results.splice(0, 2); // new array starting at index 0 up to index 2 (won't return the 2nd index think 2 minus 1)

// // new array starting from the right -3 = 10.0  stops at 10 but think 2 minus 1 so returns -5
// const specificResultsOfTestFromTheRight = results.splice(-3, -1);

// const copyAndNewArray = results.concat([3.99, 2]); // returns a brand new array to combine a new array to an existing array

// results.indexOf(1.5); //first item with this value left to right
// results.lastIndexOf(1.5); //first item with this value right to left

// results.push(5.9);
// console.log(storedResults, results);

// a way to find reference data
// const personData = [{ name: 'max' }, { name: 'manuel' }];

// const manuel = personData.find((anyNameYouWant, index, fullArray) => {
// 	// console.log('index:', index);
// 	// console.log('fullArray:', fullArray);
// 	return anyNameYouWant.name === 'manuel';
// });
// console.log(manuel);

// const arrayIndex = personData.findIndex((anyNameYouWant, index, fullArray) => {
// 	return anyNameYouWant.name === 'max';
// });

// console.log(arrayIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// //  for loop route
// // for (const price of prices) {
// // 	taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, index, prices) => {
// 	const priceObj = { index: index, taxAdjPrice: price * (1 + tax) }; //create an  object of our values in the prices array and update the prices
// 	taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, index, prices) => {
// 	const priceObj = { index: index, taxAdjPrice: price * (1 + tax) }; //create an  object of our values in the prices array and update the prices
// 	return priceObj;
// });

// console.log(prices, taxAdjustedPrices);

// const sortedArray = prices.sort((a, b) => {
// 	// sort() converts everything into  a string
// 	if (a > b) {
// 		return 1;
// 	} else if (a === b) {
// 		return 0;
// 	} else {
// 		return -1;
// 	}
// });

// console.log(sortedArray);
// // console.log(sortedArray.reverse())

// const filteredArray = prices.filter((price, index, prices) => {
// 	return price > 6;
// });

// console.log(filteredArray);

// const reduceMethodArray = prices.reduce((prevValue, currentValue, currentIndex, prices) => {
// 	return prevValue + currentValue;
// }, 0);

// console.log(reduceMethodArray);

// * string methods for arrays
// const data = 'new york;10.99;2000';

// const splitArrayMethod = data.split(';'); //returns an array
// splitArrayMethod[1] = +splitArrayMethod[1];
// console.log(splitArrayMethod);

// const joinArrayMethod = ['Max', 'Jones'];
// const aName = joinArrayMethod.join(' ');
// console.log(aName);

// const copiedArray = [...joinArrayMethod, 'billy'];
// console.log(joinArrayMethod, 'Copied Array:', copiedArray);

//  * object are reference values. cannot be copied until an array only their addresses. here is an alternative to get the data separated.
// const persons = [
// 	{ name: 'bob', age: 30 },
// 	{ name: 'sally', age: 32 },
// ];

// const copiedPersons = [...persons.map((person) => ({ name: person.name, age: person.age }))];

// persons.push({ name: 'Anna', age: 29 });
// persons[0].age = 31;
// console.log('originalArray:', persons, copiedPersons); // notice how the copied array is different than persons array

// *array destructuring

// const nameData = ['max', 'jones', 'mr', 30];

// const [firstName, lastName] = nameData; //pulls out elements into a variable
// console.log(firstName);
// console.log(lastName);

// const spreadOperatorDestructuring = ['max', 'jones', 'mr', 30];

// const [first, last, ...otherInfo] = spreadOperatorDestructuring;
// console.log(first, last, otherInfo);
