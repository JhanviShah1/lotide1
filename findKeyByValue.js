const findKeyByValue = function(obj, val) {
  let results = '';
  results = Object.keys(obj);
  for (let item of results) {
    if (obj[item] === val) {
      return item;
    }
  }
};

module.exports = findKeyByValue;