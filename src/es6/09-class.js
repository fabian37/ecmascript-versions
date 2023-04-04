class User {
	#age;
	constructor({ name = 'new user', age = 0 }) {
		this.name = name;
		this.#age = age;
	}
	greeting() {
		return `Hello, I'm ${this.name}`;
	}
	get age() {
		return this.#age;
	}
	set age(newAge) {
		return (this.#age = newAge);
	}
}

class UserAdmin extends User {
	constructor(props) {
		super(props);
	}
	greeting() {
		return `Hello, I'm ${this.name} an admin`;
	}
}

const newUser = new User({ name: 'Fabian', age: 22 });

console.log(newUser.greeting());
console.log((newUser.age = 23));
console.log(newUser.age);

const newAdmin = new UserAdmin({ age: 37 });
console.log(newAdmin);
console.log(newAdmin.age);
console.log(newAdmin.greeting());
