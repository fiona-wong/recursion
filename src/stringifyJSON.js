// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === undefined || typeof obj === 'function') {
    return;
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj;
  } else if (Array.isArray(obj)) {
    return '[' + obj.map(function(valueInArray) {
      return stringifyJSON(valueInArray);
    }) + ']';
  } else {
      var objectArray = [];
      for (var prop in obj) {
        if (typeof obj[prop] === 'function' || obj[prop] === undefined) {
          return '{}';
        } else {
          objectArray.push(stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]));
        }
      }
      return '{' + objectArray.join() + '}';
  }
};
