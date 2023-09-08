/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    const result = [];

    function flatten(arr, depth) {
        for (const item of arr) {
            if (Array.isArray(item) && depth < n) {
                flatten(item, depth + 1);
            } else {
                result.push(item);
            }
        }
    }

    flatten(arr, 0);
    return result;
};
