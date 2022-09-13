// ! Task 1
const numbers = [1, 2, 3, 4, 5, 6, 7];

const filteredNumbers = numbers.filter((num) => {
	return num > 5;
});

console.log(filteredNumbers);

const mapNumbers = numbers.map((number) => {
	return { key: number };
});

console.log(mapNumbers);

const reduceNumbers = numbers.reduce((prevValue, currValue) => {
	return prevValue * currValue;
});

console.log(reduceNumbers);

const MaxValue = (...values) => {
	const bigValue = Math.max(...values);
	const smallValue = Math.min(...values);
	return [bigValue, smallValue];
};

const [max, min] = MaxValue(...numbers);

console.log(max, min);

const setOfNumbers = new Set();
setOfNumbers.add(2);
setOfNumbers.add(5);

console.log(setOfNumbers);
