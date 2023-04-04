class User {
	#age;
	constructor({ name = 'new user', age = 0 }) {
		this.name = name;
		this.#age = age;
	}
	#greeting() {
		return `Hello, I'm ${this.name}`;
	}
	get age() {
		return this.#age;
	}
	set age(newAge) {
		return (this.#age = newAge);
	}
}

const fabian = new User({
	age: 22,
	name: 'Fabian',
});

console.log(fabian.greeting());
console.log(fabian.age);
