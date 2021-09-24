
const findKey = function(obj,callback) {
  let result = '';
  result = (Object.keys(obj));
  for (let item of result) {
    if (callback(obj[item])) {
      return item;
    }
  }
};




module.exports = findKey;






