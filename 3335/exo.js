/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function (s, t) {
    const MOD = 1000000007;
    const arr = s.split('');
    const n = arr.length;
    const freq = new Array(26).fill(0);

    // Count initial frequencies
    for (let i = 0; i < n; i++) {
        freq[arr[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Handle transformations in blocks of 26
    while (t >= 26) {
        const temp = new Array(26).fill(0);
        for (let j = 0; j < 25; j++) {
            temp[j + 1] = (freq[j] + temp[j + 1]) % MOD;
            temp[j] = (temp[j] + freq[j]) % MOD;
        }
        temp[25] = (temp[25] + freq[25]) % MOD;
        temp[0] = (temp[0] + freq[25]) % MOD;
        temp[1] = (temp[1] + freq[25]) % MOD;
        freq.splice(0, 26, ...temp);
        t -= 26;
    }

    // Handle remaining transformations
    let ans = 0;
    for (let i = 0; i < 26; i++) {
        const diff = 26 - i;
        if (t >= diff) {
            freq[i] = (2 * freq[i]) % MOD;
        }
        ans = (ans + freq[i]) % MOD;
    }

    return ans;
};
