const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const roundedNumber = Math.round(randomNumber * 10) / 10;

function number1() {
	if (roundedNumber < 0.7) {
		return alert(`your number is ${roundedNumber} which is greater than 0.7`);
	}
	return alert(`your number is ${roundedNumber} which is not greater than 0.7`);
}

number1(randomNumber);

let nums = [1, 2, 3, 4, 5, 6, 7, 8];

function array1() {
	for (let i = 7; i > 0; i--) {
		console.log(`array 1 is ${i}`);
	}
}

array1(nums);

function array2() {
	let i = 0;
	for (const logEntry of nums) {
		console.log(`array 2 index ${i} of ${logEntry}`);
		i++;
	}
}

array2(nums);

const randomNumber2 = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const roundedNumber2 = Math.round(randomNumber * 10) / 10;
