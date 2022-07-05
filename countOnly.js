const assertEqual = require('./assertEqual')
const countOnly = function(allItems, itemsToCount) {
  let result = {}
  for (const element of allItems) {
    if (itemsToCount[element]) {
      if (!result[element]) {
        result[element] = 0
      }
      result[element] = result[element] + 1
    }
  }
  return result
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
module.exports = countOnly