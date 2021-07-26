const eqObjects = function(object1, object2) {
  let arr1 = '';
  let arr2 = '';
  arr1 = Object.keys(object1);
  arr2 = Object.keys(object2);
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const item of arr1) {
    if (object1[item] !== object2[item]) {
      return false;
    }
  }
  return true;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Assertion passed: ${actual}===${expected}`);
    console.log(`Example label: ${inspect(actual)}`);
  } else {
    console.log(`Assertion failed: ${actual}!==${expected}`);
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba),true);

