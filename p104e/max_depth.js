/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */
const Tree = require('binary_tree');
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
// TESTS
[
  ['#', 0],
  ['1,#,#', 1],
  ['1,2,#,#,3,#,#', 2],
  ['1,2,3,4,#,#,#,#,#', 4],
  ['1,#,2,#,3,#,4,#,#', 4],
  ['1,#,2,3,4,#,#,#,#', 4],
  ['1,#,2,3,#,#,4,#,#', 3],
  ['1,2,4,#,#,5,#,7,#,#,3,6,#,8,#,#,#', 4],
  ['3,9,#,#,20,15,#,#,7,#,#', 3],
].forEach(([tree, expected]) => {
  const actual = maxDepth(Tree.deserialize(tree));
  console.log('Max depth of', tree, '->', actual);
  console.assert(actual === expected);
});
