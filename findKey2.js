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
const findKey = function (object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key
    }    
  }
}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"
assertEqual(findKey())