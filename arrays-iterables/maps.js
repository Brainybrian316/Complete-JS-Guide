const ids = new Set(['hi', 'from', 'set']);
ids.add(2);
if (ids.has('hi')) {
	ids.delete('hi');
}
for (const entry of ids.entries()) {
	console.log(entry[0]);
}
console.log(ids);
