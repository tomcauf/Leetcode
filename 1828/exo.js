/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
  const answer = [];
  for (const query of queries) {
      const [x, y, r] = query;
      let count = 0;
      for (const [px, py] of points) {
          const distance = Math.sqrt((px - x) ** 2 + (py - y) ** 2);
          if (distance <= r) {
              count++;
          }
      }
      answer.push(count);
  }
  return answer;
};
