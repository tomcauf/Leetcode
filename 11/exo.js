/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        // Calculate the width between the two lines
        const width = right - left;

        // Calculate the height (minimum of the two lines)
        const h = Math.min(height[left], height[right]);

        // Calculate the area and update maxWater if needed
        const area = width * h;
        maxWater = Math.max(maxWater, area);

        // Move the pointer that points to the shorter line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};