/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  let xor_all = 0;
  for (let num of nums) {
      xor_all ^= num;
  }
  
  let xor_needed = xor_all ^ k;
  
  return countSetBits(xor_needed);
};

/**
* Helper function to count the number of 1s in the binary representation
* @param {number} num
* @return {number}
*/
function countSetBits(num) {
  let count = 0;
  while (num > 0) {
      count += num & 1;
      num >>= 1;
  }
  return count;
}
