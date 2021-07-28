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
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

/*const finalArr = [];

  for (item of array) {
    if (!callback(item)) {
      finalArr.push(item);
    } else {
      return finalArr;
    }
  }
};*/