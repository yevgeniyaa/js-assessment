exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers = {
	count: function(start, end) {
		var intervalID = setInterval(startCount, 100);

		function startCount() {
			if (start > end) clearInterval(intervalID);
			else console.log(start++);
		}
		startCount();
		return {
			cancel: function() {
				clearInterval(intervalID);
			}
		};
	},

	count2: function(start, end) {
		var count = start;
		var intervalID = setInterval(function() {
			if (count > end) clearInterval(intervalID);
			else console.log(count++);
		}, 100);
		return {
			cancel: function() {
				clearInterval(intervalID);
			}
		};
	},

	count3: function(start, end) {
		var counter = {
			beginning: start,
			finish: end,
			intervalID: null,
			startCount: function() {
				this.intervalID = setInterval(this.logNumber, 100);
			},
			logNumber: function() {
				console.log(this.beginning++);
				if (this.beginning > this.finish)
					clearInterval(this.intervalID);
			},
			cancel: function() {
				clearInterval(this.intervalID);
			}
		};
		counter.startCount();
		return counter;
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