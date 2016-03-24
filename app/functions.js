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
    return `${str}, ${str2}`;
  };
},

makeClosures : function(arr, fn) {
	var fun = function(arg) {
		return function() {
			return fn(arg);
		};
	};
	var resArr = arr.map(fun);
	return resArr;
},

partial : function(fn, str1, str2) {
  var fun = fn.bind(null, str1, str2); 
	return function (srt3) {
		return fun(srt3);
	};
},

useArguments : function() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
},

callIt : function(fn) {
  var args = [].slice.call(arguments, 1, arguments.length);
  return fn.apply(null, args);
},

partialUsingArguments : function(fn) {

},

curryIt : function(fn) {

}
};
