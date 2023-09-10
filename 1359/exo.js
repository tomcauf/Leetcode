/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
    let count = 1;
    for (let i = 2; i <= n; i++) {
        count = (count * (2 * i - 1) * i) % (1e9 + 7);
    }
    return count;
};