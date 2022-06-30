const assertEqual = function(actual, expected) {
  const fail = "🔴";
  const pass = "✅";
  if (actual !== expected) {
    console.log(`${fail}${fail}${fail} Assertion Failed:
     ${actual} is not a ${expected}`);
  }else {
    console.log(`${pass}${pass}${pass} Assertion Passed:
     ${actual} = ${expected}`);
  }
};
const findKeyByValue = function (object, param){
  for (const key in object) {
    if (object[key] === param) {
      return key
    }
  }
}
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);