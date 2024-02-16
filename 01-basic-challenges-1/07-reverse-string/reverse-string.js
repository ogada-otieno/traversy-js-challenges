function reverseString(str) {
  let reversedStr = '';
  for (let index = str.length - 1; index >= 0; index--) {
    reversedStr += str[index];
  }
  return reversedStr;
}

//   return str.split('').reverse().join('');

module.exports = reverseString;
