/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// var filter = function(arr, fn) {
//     return arr.reduce((filteredArr, val, i) => {
//         if (fn(val, i)) {
//             filteredArr.push(val);
//         }
//         return filteredArr;
//     }, []);
// };
var filter = function(arr, fn) {
    const filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
};
