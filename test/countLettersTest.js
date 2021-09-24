const assert = require('chai').assert;
const countLetters = require('../countLetters');


describe("#countLetters", () => {
  it("returns { H: 1, e: 1, l: 3, o: 2, W: 1, r: 1, d: 1 } for (countLetterswords('Hello,World'))", () => {
     
    assert.deepEqual(countLetters('Hello World'), { H: 1, e: 1, l: 3, o: 2, W: 1, r: 1, d: 1 });
  });
  
});