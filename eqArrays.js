const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
  console.log(arr1,arr2);
  if (arr1 === arr2) {
    return true;
  }
  if (arr1 == null || arr2 == null) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
  
};
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true);
// assertEqual(eqArrays([1, 2, 3], ['1', 2, 3]),true);
// assertEqual(eqArrays([], [1, 2, 3]), true);
module.exports = eqArrays;