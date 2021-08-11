//const assertEqual = require('./assertEqual');

let first = 0;
const head = function(array) {
  if (array === []) {
    return undefined;
  } else {
    first = array[0];
    return first;
  }
};
// console.log(head([1, 2, 4]));
// console.log(head([]));
// assertEqual(head([1,2,3,5]),1);
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;