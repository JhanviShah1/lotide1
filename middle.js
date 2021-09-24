
const middle = function (array) {
  const newArr = [];
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {

    const middleIndex2 = array.length / 2;
    const middleIndex1 = middleIndex2 - 1;
    const middleValue1 = array[middleIndex1];
    const middleValue2 = array[middleIndex2];
    newArr.push(middleValue1,middleValue2);
    
  } else if (array.length % 2 !== 0) {
    const middleIndex = (array.length - 1) / 2;
    const middleValue = array[middleIndex];
    newArr.push(middleValue);
  }
  return newArr;
};

module.exports = middle;
