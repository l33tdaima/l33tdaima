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
 * @param {number} sum
 * @return {number}
 */
var pathSumFrom = function (p, s) {
  if (p == null) return 0;
  return (
    (p.val === s ? 1 : 0) +
    pathSumFrom(p.left, s - p.val) +
    pathSumFrom(p.right, s - p.val)
  );
};
var pathSum = function (root, targetSum) {
  if (root == null) return 0;
  return (
    pathSumFrom(root, targetSum) +
    pathSum(root.left, targetSum) +
    pathSum(root.right, targetSum)
  );
};
// TESTS
[
  ['10,5,3,3,#,#,-2,#,#,2,#,1,#,#,-3,#,11,#,#', 8, 3],
  ['5,4,11,7,#,#,2,#,#,#,8,13,#,#,4,5,#,#,1,#,#', 22, 3],
  ['#', 0, 0],
  ['1', 1, 1],
  ['1,-2,1,-1,#,#,3,#,#,-3,-2,#,#,#', -1, 4],
].forEach((t) => {
  const tree = Tree.deserialize(t[0]);
  const actual = pathSum(tree, t[1]);
  console.log('# of paths sum to', t[1], 'in', t[0], '->', actual);
  console.assert(actual === t[2]);
});
