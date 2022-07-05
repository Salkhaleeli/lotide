const eqArrays = function(Arr1, Arr2) {
  if (Arr1.length !== Arr2.length) {
    return false
  }
  for (let i = 0; i < Arr1.length; i++) {
    if (Arr1[i] !== Arr2[i]) {
      return false  
    }
  }
  return true
}
const assertObjectsEqual = function(object1,  object2) {
  const object1Keys = Object.keys(object1)
  const object2Keys = Object.keys(object2)

  if (object1Keys.length !== object2Keys.length) {
    console.log("🛑🛑🛑 Assertion Failed: " + object1 + " !== " + object2);
  }
  for (const key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        console.log("🛑🛑🛑 Assertion Failed: " + object1 + " !== " + object2);
      }
    }
    if (object1[key] !== object2[key]) {
      console.log("🛑🛑🛑 Assertion Failed: " + object1 + " !== " + object2);
    }
  }
  console.log("✅✅✅ Assertion Passed: " + object1 + " === " + object2)
  
}
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc));
assertObjectsEqual(ab, ba)
assertObjectsEqual(ab, cd)
module.exports = assertObjectsEqual;