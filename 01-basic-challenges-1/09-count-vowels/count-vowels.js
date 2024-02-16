function countVowels(str) {
  let count = 0;

  for (let index = 0; index < str.length; index++) {
    vowels = ['a', 'e', 'i', 'o', 'u'];

    const letter = str[index].toLowerCase();

    for (let index = 0; index < vowels.length; index++) {
      const vowel = vowels[index];

      if (letter === vowel) {
        count++;
      }
    }
  }
  return count;
}

countVowels('Flower');

module.exports = countVowels;
