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
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`Assertion passed: ${array1}===${array2}`);
  } else {
    console.log(`Assertion failed: ${array1}!==${array2}`);
  }
};
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
/*const ins = function(word) {
  word = word[0];
  return word;
};
const results1 = map(words,ins);
console.log(results1);*/
const results1 = map(words,word=> word[0]);
console.log(results1);
assertArraysEqual(results1,['g','c','t','m','t']);