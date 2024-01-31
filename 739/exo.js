/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [],
    result = new Array(temperatures.length).fill(0);
  temperatures.forEach((temp, i) => {
    while (stack.length && temp > temperatures[stack[stack.length - 1]]) {
      let idx = stack.pop();
      result[idx] = i - idx;
    }
    stack.push(i);
  });
  return result;
};
