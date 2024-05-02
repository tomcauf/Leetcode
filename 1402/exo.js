/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
  satisfaction.sort((a, b) => b - a);
  let max, cur, sum;
  max = cur = sum = 0;
  for(let level of satisfaction) {
      sum += level;
      cur += sum;
      max = Math.max(max, cur);
  }
  return max;
};