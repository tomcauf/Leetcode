/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    if (this.length !== rowsCount * colsCount) return [];
    const result = Array.from({ length: rowsCount }, () => []);
    let index = 0;
    for (let col = 0; col < colsCount; col++) {
        const startRow = col % 2 === 0 ? 0 : rowsCount - 1;
        const step = col % 2 === 0 ? 1 : -1;
        for (let row = startRow; row >= 0 && row < rowsCount; row += step) {
            result[row].push(this[index++]);
        }
    }
    return result;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */