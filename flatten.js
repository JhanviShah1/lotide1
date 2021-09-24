
const flatten = function(source) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    if (Array.isArray(source[i])) {
      let word = source[i];
      for (let item of word) {
        newArr.push(item);
      }
    } else {
      newArr.push(source[i]);
    }
  }
  return newArr;
};

module.exports = flatten;