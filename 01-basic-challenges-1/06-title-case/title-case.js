function titleCase(str) {
  //   let arr = str.toLowerCase().split(' ');
  //   for (let index = 0; index < arr.length; index++) {
  //     arr[index] = arr[index][0].toUpperCase() + arr[index].slice(1);
  //   }
  //     return arr.join(' ');
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

module.exports = titleCase;
