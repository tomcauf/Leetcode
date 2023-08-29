/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for (const [i, num] of nums.entries()) {
        if (num >= target) {
            return i;
        }
    }
    return nums.length;
};