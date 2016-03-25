exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return (num >> (bit - 1)) & 1;
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var str = num.toString(2);
    return new Array(9 - str.length).join('0') + str;
  },

  multiply: function(a, b) {
    var res = a * b;
    return Number(res.toPrecision(6));
  }
};