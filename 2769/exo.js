/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function(num, t) {
    return num + 2 * t;
};

// Test cases
console.log(theMaximumAchievableX(4, 1)); // 6
console.log(theMaximumAchievableX(3, 2)); // 7