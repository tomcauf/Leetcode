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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
  if (!root) return 0;
  
  let sum = 0;
  let queue = [root];
  
  while (queue.length > 0) {
      let levelSum = 0;
      const levelSize = queue.length;
      
      for (let i = 0; i < levelSize; i++) {
          const node = queue.shift();
          levelSum += node.val;
          
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }
      
      sum = levelSum;
  }
  
  return sum;
};