const middle = require('../middle');
const assertArrayEqual = require('../assertArraysEqual');

console.log(middle([1,2,3,4,5,6]));
console.log(middle([1,2,3]));
console.log(middle([]));
assertArrayEqual(middle([1,2,3,4,5,6]),[3,4]);
assertArrayEqual(middle([]),[]);
