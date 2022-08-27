// let name = 'max';

// function greet() {
// 	let age = 30;
// 	let name = 'Manuel'; // shadowing the name variable only in the func.
// 	console.log(name, age);
// }
// console.log(name, age); // age won't work its blocked scope
// greet();

var name = 'max';
// var name = 'Anna' // does not throw an error

if (name === 'max') {
	var hobbies = ['sports', 'cooking']; //works because var is global scope
	// let hobbies = ['sports', 'cooking'] // does not work blocked scope
	console.log(hobbies);
}
function greet() {
	var age = 30;
	var name = 'Manuel'; // shadowing the name variable only in the func.
	console.log(name, age);
}
console.log(name, hobbies);
greet();
