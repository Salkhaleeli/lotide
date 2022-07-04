const eqArrays = require('./eqArrays');
const assertArraysEq = function(Arr1, Arr2){
  const fail = "🔴";
  const pass = "✅";
  if (eqArrays(Arr1, Arr2)) {
    return(`${pass}${pass}${pass} Assertion Passed:
     ${Arr1} = ${Arr2}`);
  }
  else{
    return(`${fail}${fail}${fail} Assertion Failed:
     ${Arr1} is not a ${Arr2}`);
  }
}
assertArraysEq([1, 2, 3], [1, 2, 3])
assertArraysEq([1, 2, 3], [2, 3])