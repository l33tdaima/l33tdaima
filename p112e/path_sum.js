/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const Tree = require('binary_tree');
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root == null) return false;
  if (root.left === null && root.right === null && root.val === targetSum) {
    return true;
  }
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

[
  ['5,4,11,7,#,#,2,#,#,#,8,13,#,#,4,#,1,#,#', 22, true],
  ['1,2,3,#,#,#,#', 5, false],
  ['1,2,#,#,#', 0, false],
  ['1,2,#,#,#', 1, false],
  ['#', 4, false],
  ['1', 1, true],
  ['1', 2, false],
  ['1,2,3,#,#,#,#', 6, true],
  ['5,4,11,7,#,#,2,#,#,#,8,13,#,#,4,#,1,#,#', 23, false],
].forEach(([tree, targetSum, expected]) => {
  const actual = hasPathSum(Tree.deserialize(tree), targetSum);
  console.log(tree, 'has path sum', targetSum, '->', actual);
  console.assert(actual == expected);
});
