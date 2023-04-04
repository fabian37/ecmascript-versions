const regex = /(\d{4})-(\d{2})-(\d{2})/;
const match = regex.exec('2023-03-01');
console.log(match);
console.table(match);
