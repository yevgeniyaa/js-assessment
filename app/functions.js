exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(str2) {
      return `${str}, ${str2}`;
    };
  },

  makeClosures: function(arr, fn) {
    return arr.map(function(arg) {
      return function() {
        return fn(arg);
      }
    });
  },

  partial: function(fn, str1, str2) {
    var fun = fn.bind(null, str1, str2);
    return function(srt3) {
      return fun(srt3);
    };
  },

  useArguments: function() {
    return [].reduce.call(arguments, function(a, b) {
      return a + b;
    })
  },

  callIt: function(fn) {
    var args = [].slice.call(arguments, 1, arguments.length);
    return fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    var args = [].slice.call(arguments, 1, arguments.length);
    return function() {
      totalArgs = args.concat([].slice.call(arguments));
      return fn.apply(null, totalArgs);
    };
  },

  curryIt: function(fn) {
    return function(arg1) {
      var partFn1 = fn.bind(null, arg1);
      return function(arg2) {
        var partFn2 = partFn1.bind(null, arg2);
        return function(arg3) {
          return partFn2(arg3);
        }
      };
    };
  }
};