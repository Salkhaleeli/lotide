

// const getFirstElement = function (actual, expected) {
  //   if (actual[0] === expected) {
    //     return actual[0];
    //   } 
    //   else {
      //     console.log(`${fail}${fail}${fail} Assertion Failed: ${actual} !== ${expected}`);
      //   }
      // };
      
      
const fail = "🔴";
const pass = "✅";
const getFirstElement = function(array, value){
  if (array[0] === value) {
    return array[0]
  }
  else {
    console.log(`${fail}${fail}${fail} Assertion Failed: ${value} !== in the Array: ${array}`);
      }
  }
console.log(getFirstElement([99,2,3,4,5], 99));
console.log(getFirstElement([22,2,3,4,5], 6));
console.log(getFirstElement(["Hello", "Lighthouse", "Labs"]), "Hello");