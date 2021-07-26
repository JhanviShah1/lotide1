const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const findKeyByValue = function(obj, val) {
  let results = '';
  results = Object.keys(obj);
  for (let item of results) {
    if (obj[item] === val) {
      return item;
    }
  }
};
let colors = {k1:"Red",k2:"Green",k3:"Blue"};
console.log(findKeyByValue(colors,"Red"));
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
