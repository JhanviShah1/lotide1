const middle = require('../middle');
const assert = require('chai').assert;


describe("#middle", () => {
  it("returns 3,4 for [1, 2,3,4,5,6]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });
  it("returns 'Lighthouse'  for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(middle(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse']);
  });
  it("returns 2 for [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it("returns []for []", () => {
    assert.deepEqual(middle([]), []);
  });
  
});