function sayHello(name) {
	console.log('sayHello:', 'Hi ' + name);
}

const sayHelloArrow = (name) => {
	console.log('sayHelloArrow:', 'Hi ' + name);
};

const twoArgsFunc = (message, name) => {
	console.log('twoArgsFunc:', message, name);
};

const noArgsFunc = () => {
	return console.log('noArgsFunc:', `hi bill`);
};

const returnedValueFunc = () => {
	let name = 'bill';
	let message = 'hi';
	return console.log('returnedValueFunc:', `${message} ${name}`);
};

const fallbackValueFunc = (name, message = ' is my name') => {
	return console.log(name + message);
};

const restOperatorFunc = (callback, ...args) => {
	let hasemptytext = false;
	for (const arg of args) {
		if (!arg) {
			hasemptytext = true;
			break;
		}
	}
	if (!hasemptytext) {
		callback();
	}
};

sayHello('bill');
sayHelloArrow('bill');
twoArgsFunc('hello', 'bill');
noArgsFunc();
returnedValueFunc();
fallbackValueFunc('bill');
restOperatorFunc(
	() => {
		console.log('callbackFunc:', 'Success');
	},
	'i',
	'take',
	'in',
	'unlimited',
	'',
	'args',
);
