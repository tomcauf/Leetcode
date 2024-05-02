/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
  const freq = {}; 
  let maxFreq = 0;

  nums.forEach(num => {
      freq[num] = (freq[num] || 0) + 1;
      maxFreq = Math.max(maxFreq, freq[num]);
  });

  const result = new Array(maxFreq).fill(null).map(() => []);
  const keys = Object.keys(freq);

  
  keys.forEach(key => {
      let count = freq[key];
      let i = 0;
      while (count > 0) {
          result[i].push(parseInt(key));
          i = (i + 1) % maxFreq;
          count--;
      }
  });

  return result;
};
