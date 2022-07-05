const assertEqual = require('./assertEqual');
const getFirstElement = function(array){
  return array[0]
}
console.log(assertEqual(getFirstElement([99,2,3,4,5], 99), 99));
console.log(assertEqual(getFirstElement([22,2,3,4,5], 9), 6));
console.log(assertEqual(getFirstElement(["Hello", "Lighthouse", "Labs"], 'Hello'), "Hello"));
module.exports = getFirstElement