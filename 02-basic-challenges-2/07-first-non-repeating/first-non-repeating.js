function findFirstNonRepeatingCharacter(str) {
  // empty object to keep track of the number of times each char appears in our str
  let charCount = {};

  // iterate through the str and add each char to the object.
  for (const char of str) {
    //   if the char is already in the object, we increment its count by 1, else the count is set to 1
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // iterate again and see check to see if the object has a count of 1, if true, return the char since its the first non-repeating character
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  // return null if we make it through the entire str without returning a char
  return null;
}

module.exports = findFirstNonRepeatingCharacter;
