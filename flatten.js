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
const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`Assertion passed: ${array1}===${array2}`);
  } else {
    console.log(`Assertion failed: ${array1}!==${array2}`);
  }
};
const flatten = function(source) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    if (Array.isArray(source[i])) {
      let word = source[i];
      console.log(word);
      for (let item of word) {
        newArr.push(item);
      }
    } else {
      newArr.push(source[i]);
    }
  }
  return newArr;
};
console.log(flatten([1,2,[3,5],[6]]));
assertArrayEqual(flatten(['hello','friends',['and', 'family']]),['hello','friends','and','family']);