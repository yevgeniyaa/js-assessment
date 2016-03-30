exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
	async: function(value) {
		return new Promise(function(fulfill, reject) {
			setTimeout(function() {
				fulfill(value);
			}, 100);
		});
	},

	manipulateRemoteData: function(url) {
		function getDataFromServer(url) {
			return new Promise(function(fulfill, reject) {
				var xhr = new XMLHttpRequest();
				xhr.open('GET', url, false);
				xhr.send();
				if (xhr.status != 200) {
					reject(xhr.status + ': ' + xhr.statusText);
				} else {
					fulfill(JSON.parse(xhr.responseText));
				}
			});
		}

		return new Promise(function(fulfill, reject) {
			getDataFromServer(url).then(function(data) {
				var names = data.people.map(function(person) {
					return person.name;
				});
				fulfill(names.sort());
			}, function(err) {
				reject(err);
			});
		});
	}
};