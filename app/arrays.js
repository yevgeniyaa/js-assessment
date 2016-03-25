exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function(a, b) {
      return a + b;
    })
  },

  remove: function(arr, item) {
    return arr.filter(function(a) {
      return a != item;
    });
  },

  removeWithoutCopy: function(arr, item) {
    while (arr.includes(item))
      arr.splice(arr.indexOf(item), 1);
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    filterArr = arr.filter(function(a) {
      return a === item;
    });
    return filterArr.length;
  },

  duplicates: function(arr) {
    return arr.filter(function(curItem, index) {
      return arr.lastIndexOf(curItem) != arr.indexOf(curItem) && arr.lastIndexOf(curItem) === index;
    });
  },

  square: function(arr) {
    return arr.map(function(a) {
      return a * a;
    })
  },

  findAllOccurrences: function(arr, target) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target)
        result.push(i);
    }
    return result;
  }
};