/**
 * @param {number} n
 * @return {number[]}
 */
// var countBits = function (n) {
//     return [...Array(n + 1)].map((_, i) => i.toString(2).split('1').length - 1);
// };
var countBits = function (n) {
    let t = Array(n + 1)
    t[0] = 0
    for (let i = 1; i <= n; ++i) {
        t[i] = t[Math.trunc(i / 2)] + i % 2;
    }
    return t;
};