exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
	reduceString: function(str, amount) {
		var reg = new RegExp(`([a-zA-Z])\\1{${amount},}`, 'g');
		return str.replace(reg, function(a, b) {
			return b.repeat(amount);
		});
	},
	wordWrap: function(str, cols) {

	},
	reverseString: function(str) {
		return str.split('').reverse().join('');
	}
};