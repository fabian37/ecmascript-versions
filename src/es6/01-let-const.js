var lastName = 'Arcos';
lastName = 'Gomez';
console.log(lastName);

let name = 'fabian';
name = 'Fabian';
console.log(name);

const age = 22;
age = 21;
console.log(age);

const cars = () => {
	if (true) {
		var car1 = 'bmw'; //function scope
		let car2 = 'mercedes'; //block scope
		const car3 = 'audi'; //block scope
	}
	console.log(car1, car2, car3);
};

cars();
