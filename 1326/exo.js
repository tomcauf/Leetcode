/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function (n, ranges) {
    const a = new Array(n + 1).fill(0);
    for (let i = 0; i < ranges.length; i++) {
        if (ranges[i] === 0) continue;
        const l = Math.max(0, i - ranges[i]);
        a[l] = Math.max(a[l], i + ranges[i]);
    }
    let e = 0, f = 0, c = 0;
    for (let i = 0; i <= n; i++) {
        if (i > e) {
            if (f <= e) return -1;
            e = f;
            c++;
        }
        f = Math.max(f, a[i]);
    }
    return c + (e < n ? 1 : 0);
};