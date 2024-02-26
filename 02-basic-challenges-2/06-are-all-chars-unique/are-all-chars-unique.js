function areAllCharactersUnique(str) {
  // initialize the new Set
  let charSet = new Set();
  // iterate over the str and check if there are any repeating characters
  for (let index = 0; index < str.length; index++) {
    let char = str[index];
    if (charSet.has(char)) {
      // if we've gone through the string and encountered the char already, return false
      return false;
    }
    //   if the char hasn't been encountered, add it to our Set
    charSet.add(char);
  }
  // then return true
  return true;
}

module.exports = areAllCharactersUnique;
