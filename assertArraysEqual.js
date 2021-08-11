const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`Assertion passed: ${array1}===${array2}`);
  } else {
    console.log(`Assertion failed: ${array1}!==${array2}`);
  }
};
// assertArraysEqual([1,2,3],[1,2,3]);
// assertArraysEqual([1,2,3],[1,2,4]);
// assertArraysEqual(['1','hi','banana'],[1,2,4]);
module.exports = assertArraysEqual;