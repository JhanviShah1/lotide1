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
    console.log('Assertion passed: ${array1}===${array2');
  } else {
    console.log(`Assertion failed: ${array1}!==${array2}`);
  }
};
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char === ' ') {
      continue;
    }
    if (!results[char]) {
      results[char] = [i];
    } else {
      results[char].push(i);
    }
  }
  return results;
};
console.log(letterPositions('lighthouse labs'));
assertArraysEqual(letterPositions("hello").e, [1]);