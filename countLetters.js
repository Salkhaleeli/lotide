const countLetters = function(string){
  let result = {}
  for (const element of string) {
    if (result[element]) {
      result[element] +=1
    }
    else {
      result[element] = 1
    }
  } return result
}
console.log(countLetters('Lighthouse'));
console.log(countLetters('lalaland'));