const reverseString = function (string) {
  charArr = string.split("");
  newString = "";

  for (let i = charArr.length - 1; i >= 0; i--) {
    newString += charArr[i];
  }

  return newString;
};

// Do not edit below this line
module.exports = reverseString;
