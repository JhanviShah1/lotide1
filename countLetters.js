const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const result = {};
const countLetters = function(sentence) {
  for (let char of sentence) {
    if (char === ' ') {
      continue;
    }
    if (char in result) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
};
//console.log(countLetters('Lighthouse labs'));
const words = countLetters('Hello World');
assertEqual(words["o"],2);