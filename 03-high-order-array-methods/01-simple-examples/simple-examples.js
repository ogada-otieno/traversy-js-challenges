const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */

const multiply = numbers.map((num) => num * 2);
console.log(multiply);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */

const even = numbers.filter((num) => num < 2);
console.log(even);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

const sum = numbers.reduce((total, num) => total + num);
console.log(sum);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */

const number = numbers.forEach((n) => {
  //   console.log(n)
});

/**
 * find: Returns the first array element that satisfies a specified condition.
 */

const firstElement = numbers.find((num) => num > 3);
console.log(firstElement);

/**
 * some: Checks if at least one array element satisfies a condition.
 */

const someElement = numbers.some((num) => num > 1);
console.log(someElement);

/**
 * every: Checks if all array elements satisfy a condition.
 */

const everyElement = numbers.every((num) => num > 2);
console.log(everyElement);
