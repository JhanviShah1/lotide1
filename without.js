
const without = function(source,itemstoremove) {
  const newArr = [];
  for (let i = 0; i < source.length; i++) {
    let word = source[i];
    if (itemstoremove.includes(word) === false) {
      newArr.push(word);
    }
  }
  return newArr;
};

module.exports = without;