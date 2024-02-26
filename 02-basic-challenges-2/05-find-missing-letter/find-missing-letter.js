function findMissingLetter(arr) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const alphabetArr = alphabet.split('');
  let indexFirst = alphabetArr.indexOf(arr[0]);
  let indexLast = alphabetArr.indexOf(arr[arr.length - 1]);
  let cut = alphabetArr.slice(indexFirst, indexLast + 1);

  for (let index = 0; index < cut.length; index++) {
    const element = cut[index];
    if (!arr.includes(element)) {
      return element;
    }
  }
  return '';
}


module.exports = findMissingLetter;
