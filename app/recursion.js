exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
	listFiles: function(data, dirName) {
		var result = [];

		function recFunction(folder, dir) {
			dir = dir || folder.dir;
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
		return (function createFibonacciSeq(i, seq) {
			if (!seq || !i) {
				i = 0;
				seq = [0, 1];
			}
			if (n < 2) return seq;
			seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
			return i === n ? seq : createFibonacciSeq(++i, seq);
		})()[n];
	},

	validParentheses: function(n) {
		var result = [];
		addBracket(0, 0, '');
		function addBracket(opened, closed, brackets) {
			if (opened === n && closed === n)
				result.push(brackets);
			else {
				if (opened < n)
					addBracket(opened + 1, closed, brackets + '(');
				if (closed < opened)
					addBracket(opened, closed + 1, brackets + ')');
			}
		}
		return result;

	}
};