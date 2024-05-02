/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
  const xCoordinates = points.map(point => point[0]);
  xCoordinates.sort((a, b) => a - b);
  
  let maxWidth = 0;
  
  for (let i = 1; i < xCoordinates.length; i++) {
      maxWidth = Math.max(maxWidth, xCoordinates[i] - xCoordinates[i - 1]);
  }
  
  return maxWidth;
};
