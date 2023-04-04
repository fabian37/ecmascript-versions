//spread-operator
let person = { name: 'Fabian', age: 22 };
let country = 'COL';

let fabian = { id: 1, ...person, country };

console.log(fabian);

//rest-operator
function sum(num, ...values) {
	console.log(values);
	console.log(num + values[0]);
	return num + values[0];
}

sum(1, 1, 2, 3, 4)