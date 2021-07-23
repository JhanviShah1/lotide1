
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
const without = function(source,itemstoremove) {
  const newArr = [];
  for (let i = 0; i < source.length; i++) {
    let word = source[i];
    if (itemstoremove.includes(word) === false) {
      newArr.push(word);
    }
  }
  return newArr;
};
const words = ["hello", "world", "lighthouse"];
assertArrayEqual(words, ["hello", "world","lighthouse"]);
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
