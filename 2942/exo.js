/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    const result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            result.push(i);
        }
    }
    return result;
};

// Test Cases
console.log(findWordsContaining(["leet", "code"], "e")); // [0, 1]
console.log(findWordsContaining(["abc","bcd","aaaa","cbc"], "a")); // [0,2]
console.log(findWordsContaining(["abc","bcd","aaaa","cbc"], "z")); // []