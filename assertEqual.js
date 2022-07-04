const assertEqual = function(actual, expected) {
  const fail = "🔴";
  const pass = "✅";
  if (actual !== expected) {
    return(`${fail}${fail}${fail} Assertion Failed:
     ${actual} is not a ${expected}`);
  }else {
    return(`${pass}${pass}${pass} Assertion Passed:
     ${actual} = ${expected}`);
  }
};
module.exports = assertEqual;