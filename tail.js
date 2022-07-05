const assertEqual = require('./assertEqual');

const tail = function(array) {
  return array[array.length-1];
};

console.log(assertEqual(tail(["Hello", "Lighthouse", "Labs"]), 'Labs'));
module.exports = tail