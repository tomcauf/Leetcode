/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
  const n = encoded.length + 1;
  const arr = new Array(n);
  arr[0] = first;
  
  for (let i = 0; i < n - 1; i++) {
      arr[i + 1] = encoded[i] ^ arr[i];
  }
  
  return arr;
};