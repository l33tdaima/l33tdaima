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
var minDepth = function (root) {
  if (root == null) return 0;
  let ldepth = minDepth(root.left);
  let rdepth = minDepth(root.right);
  if (ldepth > 0 && rdepth > 0) return 1 + Math.min(ldepth, rdepth);
  else return 1 + ldepth + rdepth;
};
// TESTS
[
  ['1', 1],
  ['1,2,#,#,#', 2],
  ['1,2,#,#,3,#,#', 2],
  ['1,2,3,4,#,#,#,#,#', 4],
  ['1,#,2,#,3,#,4,#,#', 4],
  ['1,#,2,3,4,#,#,#,#', 4],
  ['1,#,2,3,#,#,4,#,#', 3],
  ['3,9,#,#,20,15,#,#,7,#,#', 2],
].forEach(([tree, expected]) => {
  const actual = minDepth(Tree.deserialize(tree));
  console.log('Max depth of', tree, '->', actual);
  console.assert(actual === expected);
});
