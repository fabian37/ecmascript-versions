async function* anotherGen() {
	yield await Promise.resolve(1);
	yield await Promise.resolve(2);
	yield await Promise.resolve(3);
}

const other = anotherGen();

other.next().then((response) => console.log(response.value));
other.next().then((response) => console.log(response.value));
other.next().then((response) => console.log(response.value));
console.log('first');

async function arrayNames(array) {
	for await (let value of array) {
		console.log(value);
	}
}

const names = ['Fabian', 'Manuel', 'Juan'];

arrayNames(names);
console.log('first');
