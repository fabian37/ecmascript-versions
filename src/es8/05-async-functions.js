const fnAsync = () => {
	return new Promise((resolve, reject) => {
		true
			? setTimeout(() => {
					resolve('Async');
			  }, 2000)
			: reject(new Error('Error'));
	});
};

// *con async y await
// const anotherFn = async () => {
// 	const something = await fnAsync();
// 	console.log(something);
// 	console.log('Hello');
// };

// !sin async y await
// const anotherFn = () => {
// 	const something = fnAsync();
// 	console.log(something);
// 	console.log('Hello');
// };

// ?con los metodos de la promesa (then)
// const anotherFn = () => {
// 	fnAsync()
// 		.then((response) => console.log(response))
// 		.then(() => console.log('Hello'));
// };

console.log('Before');
anotherFn();
console.log('After');
