/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) { 
    let x = nums.slice(0,n);
    let y = nums.slice(n,nums.length);
    let result = [];
    for(let i=0; i<n; i++){
        result.push(x[i]);
        result.push(y[i]);
    }
    return result;
};