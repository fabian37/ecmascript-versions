// enhanced object literals

// function newUser (user, age, country) {
//   return {
//     user: user,
//     age: age,
//     country: country
//   }
// }

function newUser(user, age, country, uId) {
	return {
		user,
		age,
		country,
		id: uId,
	};
}

console.log(newUser('fabian37', 22, 'CO', 1));

let nombre = 'Computer',
	estado = 'On';

let machine = {
	nombre,
	estado,
};

console.log(machine);
