/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
  let m = matrix.length, n = matrix[0].length;
  let res = 0;

  for (let l = 0; l < n; ++l) {
      let sums = new Array(105).fill(0);
      for (let r = l; r < n; ++r) {
          for (let i = 0; i < m; ++i) {
              sums[i] += matrix[i][r];
          }
          for (let i = 0; i < m; ++i) {
              let sum = 0;
              for (let j = i; j < m; ++j) {
                  sum += sums[j];
                  if (sum === target) {
                      ++res;
                  }
              }
          }
      }
  }

  return res;
};