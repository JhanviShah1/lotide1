
let first = 0;
const head = function(array) {
  if (array === []) {
    return undefined;
  } else {
    first = array[0];
    return first;
  }
};

module.exports = head;