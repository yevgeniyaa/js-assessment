exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
	return (num >> (bit - 1)) & 1;
  },

  base10: function(str) {
	 return parseInt(str, 2);
  },

  convertToBinary: function(num) {
	return setLength(num.toString(2), 8);
	function setLength(num, length) {
      var result = "";
		while(length--)
			result += (num >> length) & 1;    
		return result;
    }
  },

  multiply: function(a, b) {
	var multiplier = 1000000;
	a *= multiplier;
    b *= multiplier;
    return (a * b) / (multiplier * multiplier);
  }
};
