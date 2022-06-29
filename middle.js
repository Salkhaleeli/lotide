// const middle = function(array) {
//     if (array.length === 1 || array.length === 2) {
//       return [array];
//     } else if (array.length % 2 === 0) {
//       return [array[array.length / 2 -1], array[array.length/2]];
//     }else {
//       return [array[array.length / 2 - 0.5]];
//     }
// };



const getMiddle = function(arr) {
    if (arr.length === 1 || arr.length === 2) {
      return arr;
    }else if (arr.length %2 === 0) {
      return [arr[arr.length / 2 - 1], arr[arr.length / 2]]
    } else {
      return [arr[arr.length /2 -0.5]]
    }
}

console.log(getMiddle([1, 2, 3])); // => [2]
console.log(getMiddle([1, 2, 3, 4, 5])) // => [3]
console.log(getMiddle([1, 2, 3, 4])) // => [2, 3]
console.log(getMiddle([1, 2, 3, 4, 5, 6])) // => [3, 4]