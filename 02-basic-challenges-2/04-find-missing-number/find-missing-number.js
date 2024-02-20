function findMissingNumber(arr) {
  // first check if there is a param arr passed, if not, it will be undefined
  if (arr === undefined || !arr || arr.length === 0) {
    return undefined;
  } else {
    //   set the length of the array if it had no missing number if it had no missing number
    let n = arr.length + 1;

    //   find the sum of the array
    const sum = (n * (n + 1)) / 2;

    //   initialize the sum of the arr being passed
    let arrSum = 0;

    //   loop through it to get its sum by adding the elements into arrSum
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];

      arrSum += element;
    }
    //   the difference between the two sums is the value of the missing number; return it like so
    return sum - arrSum;
  }
}

findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]);
findMissingNumber([]);
findMissingNumber();

module.exports = findMissingNumber;
