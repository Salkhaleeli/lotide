const args = process.args.slice(2);
if (args.length < 2) {
  console.log(`Error: pleae enter at least two args`)
  process.exit();
}
console.log('args:', args);

const convertToNums = function (numbers){
  const outputArr = [];
  for (let num of numbers){
    outputArr.push(Number(num));
  }
  return outputArr;
};
const allNums = function (numbers) {
  for (let num of numbers) {
    if (isNaN(num)) {
      console.log(`Error please input only numbers`);
      process.exit();
    }
  }
  return numbers;
};
const sum = function (numbers) {
  let total = 0;
  for (let nb of numbers) {
    if (Number.isInteger(nb)) {
      total += nb
    }
    console.log('nb:', nb, 'total', total);
  }
  console.log('Total:', total);
}
