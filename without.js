const eqArrays = require ('./eqArrays')
const without = function(arr1, arr2) {
  const result = []
    return arr1.filter(x => !arr2.includes(x))
}

const assertArraysEq = require ('./assertArraysEqual')
assertArraysEq(without([1, 2, 3], [1]),[2, 3]) // => [2, 3]
assertArraysEq(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2", "4"]) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
assertArraysEq(without(words, ["lighthouse"]), ["hello", "world"]);
module.exports = without;