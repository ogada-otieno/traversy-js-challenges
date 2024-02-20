function arrayIntersection(arr1, arr2) {
  // initialize empty array to store intersection
  let arr3 = [];
  // loop over arr1
  for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    // use includes() to check if elements of arr1 are present in arr2 and push the intersection values into arr3
    if (arr2.includes(element)) {
      arr3.push(element);
    }
  }
  return arr3;
}
module.exports = arrayIntersection;
