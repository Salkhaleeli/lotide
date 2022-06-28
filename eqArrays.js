// const fail = "🔴"
// const pass = "✅";
// const eqArrays = function (Arr1, Arr2) {
//   for (let i = 0; i < Arr1.length; i++) {
//     if (Arr1[i] !== Arr2[i]) {
//       return false;
//     }
//     return true;
//   }
// };

const eqArrays = function(Arr1, Arr2) {
  for (let i = 0; i < Arr1.length; i++) {
    if (Arr1[i] !== Arr2[i]) {
      return false
    }else{
      return true
    }
    
  }
}
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));