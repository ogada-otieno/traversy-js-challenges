function formatPhoneNumber(arr) {
  let firstThree = arr.slice(0, 3).join('');
  let secondThree = arr.slice(3, 6).join('');
  let lastDigits = arr.slice(6, 10).join('');
  let phone = `(${firstThree}) ${secondThree}-${lastDigits}`;
  return phone;
}

formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => "(123) 456-7890"

module.exports = formatPhoneNumber;
