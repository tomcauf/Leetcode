/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const resultMap = new Map();
    for (const obj of arr1) {
        resultMap.set(obj.id, obj);
    }
    for (const obj of arr2) {
        if (resultMap.has(obj.id)) {
            const existingObj = resultMap.get(obj.id);
            for (const key in obj) {
                existingObj[key] = obj[key];
            }
        } else {
            resultMap.set(obj.id, obj);
        }
    }
    const joinedArray = [...resultMap.values()].sort((a, b) => a.id - b.id);

    return joinedArray;
};