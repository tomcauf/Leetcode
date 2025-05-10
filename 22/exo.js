/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];

    function backtrack(currentString, open, close) {
        // Base case: if the current string has 2*n characters, add it to result
        if (currentString.length === 2 * n) {
            result.push(currentString);
            return;
        }

        // If we can add an opening parenthesis, add it and continue
        if (open < n) {
            backtrack(currentString + '(', open + 1, close);
        }

        // If we can add a closing parenthesis, add it and continue
        if (close < open) {
            backtrack(currentString + ')', open, close + 1);
        }
    }

    // Start backtracking with empty string and no parentheses
    backtrack('', 0, 0);

    return result;
};