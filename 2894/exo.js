/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {

  const totalSum = n * (n + 1) / 2;

  const k = Math.floor(n / m);
  
  const sumDivisibleByM = m * (k * (k + 1) / 2);

  return (totalSum - sumDivisibleByM) - sumDivisibleByM;
};
// Test cases
console.log(differenceOfSums(10, 3)); // 19
console.log(differenceOfSums(5, 6)); // 15
console.log(differenceOfSums(5, 1)); // -15