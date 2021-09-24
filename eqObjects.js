const eqArrays = require("./eqArrays");
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqObjects = function (object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const key of arr1) {
    if (object1[key] !== object2[key]) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (typeof object1[key] === "object") {
        if (!eqObjects(object1[key],object2[key])) {
          return false;
        }
      } else {

        return false;
      }
    }
  }
  return true;
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
const a = { a: ["1"], b: {c:['2']} };
const b = { b: "2", a: "1" };
console.log(eqObjects(a, b)); // => false

const c = { a: ["1"], b: {c:['2']} };
const d = { a: ["1"], b: {c:['2']} };
console.log(eqObjects(c, d)); // => true

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

module.exports = eqObjects;
