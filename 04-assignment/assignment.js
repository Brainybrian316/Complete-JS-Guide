const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const roundedNumber = Math.round(randomNumber * 10) / 10;

function number1() {
	if (roundedNumber < 0.7) {
		return alert(`your number is ${roundedNumber} which is greater than 0.7`);
	}
	return alert(`your number is ${roundedNumber} which is not greater than 0.7`);
}

number1();

let nums = [1, 2, 3, 4, 5, 6, 7, 8];

function array1() {
	for (let i = 7; i > 0; i--) {
		console.log(`array 1 is ${i}`);
	}
}

array1();

function array2() {
	let i = 0;
	for (const logEntry of nums) {
		console.log(`array 2 index ${i} of ${logEntry}`);
		i++;
	}
}

array2();

const randomNumber2 = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const roundedNumber2 = Math.round(randomNumber * 10) / 10;

function compare() {
	if (roundedNumber && roundedNumber2 < 0.7) {
		alert(`both numbers are greater than 0.7`);
	} else if (roundedNumber > 0.2 || roundedNumber2 > 0.2) {
		alert(`at least one of your numbers is not greater than 0.2`);
	}
}

compare();

//  ****************** Instructor solution ****************************

if (randomNumber > 0.7) {
	alert('instructor first task greater');
} else {
	alert('instructor not greater');
}

const instructorNums = [10, 20, 30, 40, 50, 60];

for (let i = 0; i < instructorNums.length; i++) {
	console.log(instructorNums[i]);
}

for (const num of instructorNums) {
	console.log(num);
}

let counter = 0;
while (counter < instructorNums.length) {
	console.log(instructorNums[counter]);
	counter++;
}

for (let i = instructorNums.length - 1; i >= 0; i--) {
	console.log(instructorNums[i]);
}

if ((randomNumber > 0.7 && randomNumber2) || randomNumber <= 0.2 || randomNumber2 <= 0.2) {
	alert('instructor last task greater');
}
