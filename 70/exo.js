/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 1, b = 1;
    for (let i = 0; i < n; i++, [a, b] = [b, a + b]);
    return a;
};

// Tests : 
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3