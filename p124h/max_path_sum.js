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
 * @return {number}
 */
var maxPathSum = function(root) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  /**
   * @param {TreeNode} root
   * @return {number} pathSum
   */
  var recMaxPathSumHelper = function(root) {
    if (root == null) return 0;
    let lt = Math.max(0, recMaxPathSumHelper(root.left));
    let rt = Math.max(0, recMaxPathSumHelper(root.right));
    maxSum = Math.max(maxSum, lt + rt + root.val);
    return root.val + Math.max(lt, rt);
  };

  if (root == null) return 0;
  recMaxPathSumHelper(root);
  return maxSum;
};

[
  ['', 0],
  ['1', 1],
  ['1,2,#,#,#', 3],
  ['1,#,2,#,#', 3],
  ['1,2,#,#,3,#,#', 6],
  ['-10,9,#,#,20,15,#,#,7,#,#', 42]
].forEach(t => {
  let tree = Tree.deserialize(t[0]);
  const actual = maxPathSum(tree);
  console.log('Max path sum of', t[0], '->', actual);
  console.assert(actual === t[1]);
});
