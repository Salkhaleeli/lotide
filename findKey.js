const findKey = function (object, callback){
  for (let key in object) {
    if (callback(object[key])) {
      return key
    }
  }
}
const names = {
  "Blue Hill": { stars: 3 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
console.log(findKey(names, x=> x.stars === 2));
