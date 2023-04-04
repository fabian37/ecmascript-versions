function* iterate(array) {
	for (let value of array) {
		yield value;
	}
}

const generator = iterate(['Fabian', 'Daniela', 'Manuel', 'Santiago']);

console.log(generator.next());
console.log(generator.next());
console.log(generator.throw(new Error('Error mi bro')));
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

function* generatorFunction(object) {
	for (const key in object) {
		yield key;
	}
}

const generator2 = generatorFunction({
	name: 'Fabian',
	age: 22,
	country: 'COL',
});

console.log(generator2.next().value, generator2.next().done);
console.log(generator2.next().value, generator2.next().done);
console.log(generator2.next().value, generator2.next().done);
console.log(generator2.next().value, generator2.next().done);
