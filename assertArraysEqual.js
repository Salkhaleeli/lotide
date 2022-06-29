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
assertArraysEq([1, 2, 3], [1, 2, 3])
assertArraysEq([1, 2, 3], [2, 3])