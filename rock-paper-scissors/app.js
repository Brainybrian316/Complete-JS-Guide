const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
	const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, '').toUpperCase();
	if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
		alert(`Invalid choice! We choose ${DEFAULT_USER_CHOICE} for you!`);
		return;
	}
	return selection;
};

const getComputerChoice = () => {
	const randomValue = Math.floor(Math.random() * 10);
	if (randomValue < 4) {
		return ROCK;
	} else if (randomValue < 7) {
		return PAPER;
	} else {
		return SCISSORS;
	}
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
	if (cChoice === pChoice) {
		return RESULT_DRAW;
	} else if (
		(cChoice === ROCK && pChoice === PAPER) ||
		(cChoice === PAPER && pChoice === SCISSORS) ||
		(cChoice === SCISSORS && pChoice === ROCK)
	) {
		return RESULT_PLAYER_WINS;
	} else {
		return RESULT_COMPUTER_WINS;
	}
};

startGameBtn.addEventListener('click', () => {
	if (gameIsRunning) {
		return;
	}
	gameIsRunning = true;
	console.log('Game is starting...');
	const playerChoice = getPlayerChoice();
	const computerChoice = getComputerChoice();
	let winner;
	if (playerChoice) {
		winner = getWinner(computerChoice, playerChoice);
	} else {
		winner = getWinner(computerChoice);
	}
	let message = `You picked ${
		playerChoice ? playerChoice : DEFAULT_USER_CHOICE
	}, computer picked ${computerChoice} `;
	if (winner === RESULT_DRAW) {
		message = message + 'had a draw.';
	} else if (winner === RESULT_PLAYER_WINS) {
		message = message + 'won.';
	} else {
		message = message + 'lost.';
	}
	alert(message);
	gameIsRunning = false;
});

// // not related to the game
// const restOperator = (a, b, ...numbers) => {
// 	let sum = 0;
// 	for (const num of numbers) {
// 		sum += num;
// 	}
// };

// const functionInAFunction = (a, b, ...numbers) => {
// 	const validateNumber = (number) => {
// 		return isNaN(number) ? 0 : number;
// 	};
// 	let sum = 0;
// 	for (const num of numbers) {
// 		sum += validateNumber(num);
// 	}
// 	return sum;
// };

//! alternative to rest operator only works with function keyword
// const nativeArguments = function() {
// 		let sum = 0;
// 		for (const num of arguments) {
// 			sum += num;
// 		}
// }

// sumUp(1, 5, 10, -3, 6, 10);
// sumUp(1, 5, 10, -3, 5, 10, 25, 88);

// const customFunction = (resultHandler, ...numbers) => {
// 	const validateNumber = (number) => {
// 		return isNaN(number) ? 0 : number;
// 	};
// 	let sum = 0;
// 	for (const num of numbers) {
// 		sum += validateNumber(num);
// 	}
// 	resultHandler(sum);
// };

// const showResultOfCustomFunc = (result) => {
// 	alert('the result after adding all numbers is: ' + result);
// };

// customFunction(showResultOfCustomFunc, 1, 5, 'fdsa', -3, 6, 10);

// customFunction(showResultOfCustomFunc, 1, 5, -3, 6, 10);
