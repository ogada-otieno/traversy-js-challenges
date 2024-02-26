function sumOfEvenSquares(arr) {
  const totalSum = arr
    .filter((num) => num % 2 == 0)
    .map((num) => num ** 2)
    .reduce((total, num) => total + num, 0);
  return totalSum;
}

sumOfEvenSquares([1, 2, 3, 4, 5]);

module.exports = sumOfEvenSquares;
