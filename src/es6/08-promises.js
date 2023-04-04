let condition = true;

const anotherFunction = () => {
	return new Promise((resolve, reject) => {
		if (condition) {
			resolve('Está funcionando');
		} else {
			reject('Algo ocurrió mal');
		}
	});
};

anotherFunction()
	.then((response) => console.log(response))
	.catch((error) => console.log(error))
	.finally(() => console.log('Finalizo la promesa'));
