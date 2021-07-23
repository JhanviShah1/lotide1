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
let num = 0;
const middle = function(array) {
  const newArr = [];
  if (array.length < 2) {
    return [];
  } else if (array.length % 2 === 0) {
    num = array.length / 2;
    for (let i = num - 1; i <= num; i++) {
      newArr.push(array[i]);
    }
  } else if (array.length % 2 !== 0) {
    num = Math.floor(array.length / 2);
    newArr.push(array[num]);
  }
  return newArr;
};
console.log(middle([1,2,3,4,5,6]));
console.log(middle([1,2,3]));
console.log(middle([]));
assertArrayEqual(middle([1,2,3,4,5,6]),[3,4]);
assertArrayEqual(middle([]),[]);


