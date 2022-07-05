const eqArrays = require('./eqArrays');
const eqObjects = function(object1,  object2) {
  const object1Keys = Object.keys(object1)
  const object2Keys = Object.keys(object2)
  if (object1Keys.length !== object2Keys.length) {
    return false
  }
  for (const key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key])
    }
    if (object1[key] !== object2[key]) {
      return false
    }
  }
  return true
}
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc));

module.exports = eqObjects;
