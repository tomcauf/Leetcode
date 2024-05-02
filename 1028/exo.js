/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function (traversal) {

  let leftMostMap = {}, i = 0, deep = 0;

  while (i < traversal.length) {

      let number = '';

      while (traversal[i] && traversal[i] !== '-') {
          number += traversal[i];
          i++;
      }

      number = parseInt(number);

      let node = new TreeNode(number);

      if (deep !== 0) {
          let parent = leftMostMap[deep - 1];
          if (parent.left) {
              parent.right = node;
          } else {
              parent.left = node;
          }
      }

      leftMostMap[deep] = node;

      deep = 0;

      while (traversal[i] === '-') {
          deep += 1;
          i++;
      }

  }

  return leftMostMap[0];

};