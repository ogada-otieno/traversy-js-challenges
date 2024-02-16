const calculator = require('./calculator');

const result = calculator(2, 3, '*/*');
const resultTwo = calculator(2, 3, '**');
const resultThree = calculator(2, 1, '+');

console.log(result);
console.log(resultTwo);
console.log(resultThree);
