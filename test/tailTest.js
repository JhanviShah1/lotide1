//const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3);

describe("#tail", () => {
  it("returns 2,3 for [1, 2, 3]", () => {
    let x = tail([1,2,3]);
    assert.deepEqual(x.length, 2);
  });
  it("returns 'Lighthouse' , 'Labs' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns b,c for ['a','b','c']", () => {
    assert.deepEqual(tail(['a','b','c']), ['b','c']);
  });
  
});
