exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
	return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
	return fn.call(obj);
  },

  functionFunction : function(str) {
	return function (str2) {
		return str + ", " + str2;
	};
  },

  makeClosures : function(arr, fn) {
	var resArr = [];
	
	var fun = function(arg) {
		return function() {
			return fn(arg);
		};
	};
	
	for (var i = 0; i < arr.length; i++) {
		resArr.push(fun(arr[i]));
    }
	return resArr;
  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
