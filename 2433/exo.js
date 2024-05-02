/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
  const n = pref.length;
  const arr = new Array(n);
  arr[0] = pref[0];

  for (let i = 1; i < n; i++) {
      arr[i] = pref[i - 1] ^ pref[i];
  }

  return arr;
};



// Test Cases
console.log(findArray([5,2,0,3,1])); // [5,7,2,3,2]
console.log(findArray([13])); // [13]