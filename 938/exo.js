/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  if (!root) {
      return 0;
  }
  
  let sum = 0;
  // If root value is in range, add it to the sum.
  if (root.val >= low && root.val <= high) {
      sum += root.val;
  }
  
  // If root value is greater than low, there might be valid values on the left subtree.
  if (root.val > low) {
      sum += rangeSumBST(root.left, low, high);
  }
  
  // If root value is less than high, there might be valid values on the right subtree.
  if (root.val < high) {
      sum += rangeSumBST(root.right, low, high);
  }
  
  return sum;
};