function newUser(name, age, country) {
	var name = name || 'Fabian';
	var age = age || 22;
	var country = country || 'COL';
	console.log(name, age, country);
}

newUser();
newUser('Manuel', 37, 'CO');

function newAdmin(name = 'Gomez', age = 22, country = 'COL') {
	console.log(name, age, country);
}

newAdmin();
newAdmin('Manuel', 37, 'CO');
