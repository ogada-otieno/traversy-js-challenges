function findMaxNumber(arr) {
  let largestNum = arr[0];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element > largestNum) {
      largestNum = element;
    }
  }
  return largestNum;
}

module.exports = findMaxNumber;
