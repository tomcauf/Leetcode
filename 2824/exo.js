/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
  nums.sort((a, b) => a - b);
  let left = 0, right = nums.length - 1;
  let count = 0;

  while (left < right) {
      let sum = nums[left] + nums[right];
      if (sum < target) {
          count += (right - left); 
          left++; 
      } else {
          right--; 
      }
  }

  return count;
};
