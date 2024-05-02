/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const smallerCounts = {};

  for (let i = 0; i < sortedNums.length; i++) {
      if (smallerCounts[sortedNums[i]] === undefined) {
          smallerCounts[sortedNums[i]] = i;
      }
  }

  return nums.map(num => smallerCounts[num]);
};
