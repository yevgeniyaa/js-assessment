exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers = {
	count: function(start, end) {
		var intervalID = setInterval(startCount, 100);

		console.log(start++);

		function startCount() {
			if (start > end) clearInterval(intervalID);
			else console.log(start++);
		}
		
		return {
			cancel: function() {
				clearInterval(intervalID);
			}
		};
	},

	countWithTimeout: function(start, end) {
		function startCount() {
			console.log(start);
			if (++start <= end)
				setTimeout(startCount, 100);
		}
		startCount();
		return {
			cancel: function() {
				start = end;
			}
		};
	}
};