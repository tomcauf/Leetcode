/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
    const dp = new Array(s.length + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i <= s.length; i++) {
        for (const w of dictionary) {
            if (i + w.length <= s.length && s.slice(i, i + w.length) === w) {
                dp[i + w.length] = Math.min(dp[i + w.length], dp[i]);
            }
        }
        dp[i + 1] = Math.min(dp[i + 1], dp[i] + 1);
    }
    return dp[s.length];
};