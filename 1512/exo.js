/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  return nums.reduce((count, num, index) => {
    for (let i = index + 1; i < nums.length; i++) {
      if (num === nums[i]) {
        count++;
      }
    }
    return count;
  }, 0);
};

// Test cases
console.log(numIdenticalPairs([1,2,3,1,1,3])); // 4
console.log(numIdenticalPairs([1,1,1,1])); // 6
console.log(numIdenticalPairs([1,2,3])); // 0