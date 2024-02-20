function fizzBuzzArray(num) {
  // initialize an empty array
  let arr = [];

  // use For looop to loop from 1 to the number passed
  for (let index = 1; index <= num; index++) {
    // use if else to check the conditions met and push the words to replace into the array
    if (index % 3 === 0 && index % 5 === 0) {
      arr.push('FizzBuzz');
    } else if (index % 3 === 0) {
      arr.push('Fizz');
    } else if (index % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(index);
    }
  }
  // return the array
  return arr;
}

module.exports = fizzBuzzArray;
