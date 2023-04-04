const user = { username: 'fg37', age: 22, country: 'CO' };
const { username, ...values } = user;
console.log(username);
console.log(values);
