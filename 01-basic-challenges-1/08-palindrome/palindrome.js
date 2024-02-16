function isPalindrome(str) {
  let removeNonAlphanumeric = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reversed = '';

  for (let index = removeNonAlphanumeric.length - 1; index >= 0; index--) {
    reversed += removeNonAlphanumeric[index];
  }

  if (reversed === removeNonAlphanumeric) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
