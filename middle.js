const assertEqual = require('./assertEqual')
const getMiddle = function(arr) {
    if (arr.length === 1 || arr.length === 2) {
      return arr;
    }else if (arr.length %2 === 0) {
      return arr[arr.length / 2 - 1], arr[arr.length / 2]
    } else {
      return arr[arr.length /2 -0.5]
    }
}
console.log(assertEqual(getMiddle([1, 2, 3]), 2)); // => [2]
console.log(assertEqual(getMiddle([1, 2, 3, 4, 5]), 3)); // => [3]
console.log(assertEqual(getMiddle([1, 2, 3, 4]), 1)); // => [2, 3]
console.log(assertEqual(getMiddle([1, 2, 3, 4, 5, 6]), 3)); // => [3, 4]