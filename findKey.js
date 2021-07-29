const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const findKey = function(obj,callback) {
  let result = '';
  //console.log(item);
  //console.log(obj[item].stars);
  result = (Object.keys(obj));
  //console.log(result);
  for (let item of result) {
    //console.log(items,obj[items].stars);
    if (callback(obj[item])) {
      return item;
    }
  }
};
const results = (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"
assertEqual(results,"noma");










