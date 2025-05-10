/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    if (s.length === 0 || words.length === 0) {
        return [];
    }

    const result = [];
    const wordCount = words.length;
    const wordLength = words[0].length;
    const totalLength = wordCount * wordLength;

    // If the string is shorter than all words concatenated, return empty array
    if (s.length < totalLength) {
        return [];
    }

    // Create a map to store the count of each word in words
    const wordMap = new Map();
    for (const word of words) {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }

    // Check each possible starting position in s
    for (let i = 0; i <= s.length - totalLength; i++) {
        // Create a map to track words we've seen in the current window
        const seenWords = new Map();
        let j = 0;

        // Process each word-sized chunk in the current window
        while (j < wordCount) {
            const start = i + j * wordLength;
            const currentWord = s.substring(start, start + wordLength);

            // If the current word is not in our word list, break
            if (!wordMap.has(currentWord)) {
                break;
            }

            // Update the seen words count
            seenWords.set(currentWord, (seenWords.get(currentWord) || 0) + 1);

            // If we've seen more occurrences of this word than allowed, break
            if (seenWords.get(currentWord) > wordMap.get(currentWord)) {
                break;
            }

            j++;
        }

        // If we successfully matched all words, add the starting index to result
        if (j === wordCount) {
            result.push(i);
        }
    }

    return result;
};