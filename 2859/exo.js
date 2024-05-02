/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
      if (countSetBits(i) === k) {
          sum += nums[i];
      }
  }
  return sum;
};

const countSetBits = (num) => {
  let count = 0;
  while (num > 0) {
      count += num & 1;
      num >>= 1;
  }
  return count;
};