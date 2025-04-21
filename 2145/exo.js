/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function (differences, lower, upper) {
    let minDiff = 0;
    let maxDiff = 0;
    let currentDiff = 0;

    for (const diff of differences) {
        currentDiff += diff;
        minDiff = Math.min(minDiff, currentDiff);
        maxDiff = Math.max(maxDiff, currentDiff);
    }

    const minStart = Math.max(lower, lower - minDiff);
    const maxStart = Math.min(upper, upper - maxDiff);

    return Math.max(0, maxStart - minStart + 1);
};
