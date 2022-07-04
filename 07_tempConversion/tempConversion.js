const ftoc = function (x) {
  let converted = (x - 32) * (5 / 9);
  return parseFloat(converted.toFixed(1));
};

const ctof = function (x) {
  let converted = x * (9 / 5) + 32;
  return parseFloat(converted.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
