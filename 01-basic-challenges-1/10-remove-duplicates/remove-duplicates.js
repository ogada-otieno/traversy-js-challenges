function removeDuplicates(arr) {
  //   let arrWithoutDup = [];
  //   for (let index = 0; index < arr.length; index++) {
  //     if (!arrWithoutDup.includes(arr[index])) {
  //       arrWithoutDup.push(arr[index]);
  //     }
  //   }
  //   return arrWithoutDup;
  return Array.from(new Set(arr));
}

module.exports = removeDuplicates;
