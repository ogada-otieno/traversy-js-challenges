function titleCase(str) {
  let arr = str.toLowerCase().split(' ');
  for (let index = 0; index < arr.length; index++) {
    arr[index] = arr[index][0].toUpperCase() + arr[index].slice(1);
  }
  return arr.join(' ');
}

module.exports = titleCase;
