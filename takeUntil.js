const takeUntil = function(array, callback) {
  const result = [];
  let isPresent = false;
  for (let item of array) {
    if (!callback(item) && isPresent === false) {
      result.push(item);
    } else if (callback(item)) {
      isPresent = true;
    }
  }
  return result;
};

module.exports = takeUntil;