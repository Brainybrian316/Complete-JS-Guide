// const ids = new Set(['hi', 'from', 'set']);
// ids.add(2);
// if (ids.has('hi')) {
// 	ids.delete('hi');
// }
// for (const entry of ids.entries()) {
// 	console.log(entry[0]);
// }
// console.log(ids);

// * maps
const person1 = { name: 'max' };
const person2 = { name: 'manuel' };

const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);
console.log(personData);
console.log(personData.get(person1));

for (const entry of personData.entries()) {
	console.log(entry);
}
// array destructuring method of for loop
for (const [key, value] of personData.entries()) {
	console.log(key, value);
}

// good for getting the keys only
for (const key of personData.keys()) {
	console.log(key);
}

// good for getting the values only
for (const values of personData.values()) {
	console.log(values);
}
