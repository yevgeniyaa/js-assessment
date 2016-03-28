exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
	listFiles: function(data, dirName) {
		var result = [];

		function recFunction(folder, dir) {
			dir = dir === undefined ? folder.dir : dir;
			var content = folder.files;
			var itHasToBeAdded = dir === folder.dir;

			content.map(function(curFile) {
				if (typeof curFile === 'string') {
					if (itHasToBeAdded)
						result.push(curFile);
				} else
					recFunction(curFile, (itHasToBeAdded ? curFile.dir : dir));
			});

		}
		recFunction(data, dirName);
		return result;
	},

	permute: function(arr) {
		var result = [];
		var string = [];

		function permutePLZ(array) {
			for (var i = 0; i < array.length; i++) {
				string.push(array[i]);
				if (array.length === 1)
					result.push(string.slice());
				permutePLZ(array.slice(0, i).concat(array.slice(i + 1)));
				string.pop();
			}
			return result;
		}
		permutePLZ(arr);
		return result;
	},

	fibonacci: function(n) {

	},

	validParentheses: function(n) {

	}
};