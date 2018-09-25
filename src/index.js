module.exports = function getZerosCount(number) {
  // your implementation
  let count = 0;
  let a = 5;
  while (number = Math.floor(number / a)) {
  	count = count + number;
  }
  return count;
}
