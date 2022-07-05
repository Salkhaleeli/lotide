const flatten = function(arr) {
  let flatArray = []
  for (const iterator of arr) {
    if (Array.isArray(iterator)) {
      for (const iterator2 of iterator) {
        flatArray.push(iterator2)
      }
    } else{
      flatArray.push(iterator)
    }
  }
  return flatArray
}
console.log(flatten([1, 2, [3, 4], 5, [6]]));
module.exports = flatten;