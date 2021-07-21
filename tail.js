const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(array) {
  let tailElements = [];
  tailElements = array.slice(1);
  return tailElements;
};
console.log(tail([0,1,2,3,4,5]));
console.log(tail(["good","great","day","greetings"]));
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);


