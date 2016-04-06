exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
	async: function(value) {
		return new Promise(function(fulfill, reject) {
			setTimeout(function() {
				fulfill(value);
			}, 10);
		});
	},

	manipulateRemoteData: function(url) {
		function getDataFromServer(url) {
			return new Promise((resolve, reject) => {
				var xhr = new XMLHttpRequest();
				xhr.open('GET', url, true);

				xhr.onload = function() {
					if (this.status == 200) {
						resolve(JSON.parse(this.response));
					} else {
						var error = new Error(this.statusText);
						error.code = this.status;
						reject(error);
					}
				};

				xhr.onerror = function() {
					reject(new Error('Network error'));
				}

				xhr.send();
			});
		}

		return getDataFromServer(url)
			.then(
				result => result.people.map(person => person.name).sort(),
				error => `Rejected: ${error}`
			);
	}
};