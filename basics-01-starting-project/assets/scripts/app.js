const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
	return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, CalcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${CalcNumber}`;
	outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
	const logEntry = {
		operation: operationIdentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: newResult,
	};
}

function calculateResult(calculationType) {
	const enteredNumber = getUserNumberInput();
	if (
		(calculationType !== 'ADD' &&
			calculationType !== 'SUBTRACT' &&
			calculationType !== 'MULTIPLY' &&
			calculationType !== 'DIVIDE') ||
		!enteredNumber
	) {
		return;
	}

	const initialResult = currentResult;
	let mathOperator;
	if (calculationType === 'ADD') {
		currentResult += enteredNumber;
		mathOperator = '+';
	} else if (calculationType === 'SUBTRACT') {
		currentResult -= enteredNumber;
		mathOperator = '-';
	} else if (calculationType === 'MULTIPLY') {
		currentResult *= enteredNumber;
		mathOperator = '*';
	} else if (calculationType === 'DIVIDE') {
		currentResult /= enteredNumber;
		mathOperator = '/';
	} else {
		alert('invalid input');
	}
	createAndWriteOutput(mathOperator, initialResult, enteredNumber);
	writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
	calculateResult('ADD');
}

function subtract() {
	calculateResult('SUBTRACT');
}

function multiply() {
	calculateResult('MULTIPLY');
}

function divide() {
	calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
