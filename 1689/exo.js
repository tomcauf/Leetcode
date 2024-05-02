/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    return Math.max(...n.split(''));
};

// Test cases
console.log(minPartitions("32")); // 3
console.log(minPartitions("82734")); // 8
console.log(minPartitions("27346209830709182346")); // 9