const eqArrays = function(Arr1, Arr2) {
  if (Array.isArray(Arr1) && Array.isArray(Arr2) && Arr1.length !== Arr2.length) {
    return false
  }
  for (let i = 0; i < Arr1.length; i++) {
    if (Arr1[i] !== Arr2[i]) {
      return false  
    }
  }
  return true
}

const without = function(arr1, arr2) {
  const result = []
    return arr1.filter(x => !arr2.includes(x))
}

const assertArraysEq = function(Arr1, Arr2){
  const fail = "🔴";
  const pass = "✅";
  if (eqArrays(Arr1, Arr2)) {
    console.log(`${pass}${pass}${pass} Assertion Passed:
     ${Arr1} = ${Arr2}`);
  }
  else{
    console.log(`${fail}${fail}${fail} Assertion Failed:
     ${Arr1} is not a ${Arr2}`);
  }
}
assertArraysEq(without([1, 2, 3], [1]),[2, 3]) // => [2, 3]
assertArraysEq(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2", "4"]) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
assertArraysEq(without(words, ["lighthouse"]), ["hello", "world"]);