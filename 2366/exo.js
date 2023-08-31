/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumReplacement = function (nums) {
    const n = nums.length;
    let currentMax = nums[n - 1];
    let totalOperations = 0;


    for (let i = n - 2; i >= 0; --i) {
        if (nums[i] > currentMax) {
            let operationsNeeded = Math.floor(nums[i] / currentMax);
            if (nums[i] % currentMax !== 0) {
                operationsNeeded++;
            }
            currentMax = Math.floor(nums[i] / operationsNeeded);
            totalOperations += operationsNeeded - 1;
        } else {
            currentMax = nums[i];
        }
    }
    return totalOperations;
};
