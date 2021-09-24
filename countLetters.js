const countLetters = function(sentence) {
  const result = {};
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

module.exports = countLetters;
