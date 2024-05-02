/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
  const numSet = new Set(nums);
  let maxK = -1;
  
  for (let num of nums) {
      if (num > 0 && numSet.has(-num)) {
          maxK = Math.max(maxK, num);
      }
  }
  
  return maxK;
};


// Test Cases
console.log(findMaxK([-1, 2, -3, 3])); // 3
console.log(findMaxK([-1,10,6,7,-7,1])); // 7
console.log(findMaxK([-10,8,6,7,-2,-3])); // -1