const removeFromArray = function (array, ...target) {
  return array.filter((x) => !target.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
