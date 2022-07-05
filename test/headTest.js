// const assertEqual = require('./assertEqual');
// const getFirstElement = function(array, value){
//   if (array[0] === value) {
//     return array[0]
//   }
//   return false
// }
// console.log(assertEqual(getFirstElement([99,2,3,4,5], 99), 99));
// console.log(assertEqual(getFirstElement([22,2,3,4,5], 9), 6));
// console.log(assertEqual(getFirstElement(["Hello", "Lighthouse", "Labs"], 'Hello'), "Hello"));

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});