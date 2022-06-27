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
assertEqual("Lighthouse Labs!", "Bootcamp!");
assertEqual(1, 1);