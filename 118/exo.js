/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows <= 0) return [];

    const result = [[1]];

    for (let i = 1; i < numRows; i++) {
        const prevRow = result[i - 1];
        const newRow = [1, ...prevRow.map((val, j) => val + (prevRow[j + 1] || 0))];
        result.push(newRow);
    }

    return result;
};