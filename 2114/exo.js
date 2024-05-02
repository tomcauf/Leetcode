/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
  let maxWords = 0;
  
  for (const sentence of sentences) {
      const words = sentence.split(' ');
      const wordCount = words.length;
      maxWords = Math.max(maxWords, wordCount);
  }
  
  return maxWords;
};
