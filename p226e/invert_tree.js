/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const Tree = require('binary_tree');
/**
 * This is a in-place inversion
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root == null) return null;
  let left = invertTree(root.left);
  let right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};

[
  ['#', '#'],
  ['1', '1,#,#'],
  ['1,2,#,#,#', '1,#,2,#,#'],
  ['1,#,2,#,#', '1,2,#,#,#'],
  ['1,2,#,#,3,#,#', '1,3,#,#,2,#,#'],
  ['1,2,3,#,#,#,#', '1,#,2,#,3,#,#'],
  ['1,#,2,#,3,#,#', '1,2,3,#,#,#,#'],
  ['1,2,3,4,#,#,#,#,#', '1,#,2,#,3,#,4,#,#'],
  ['1,#,2,#,3,#,4,#,#', '1,2,3,4,#,#,#,#,#'],
  ['1,#,2,3,4,#,#,#,#', '1,2,#,3,#,4,#,#,#'],
  ['1,#,2,3,#,#,4,#,#', '1,2,4,#,#,3,#,#,#'],
].forEach((t) => {
  const actual = Tree.serialize(invertTree(Tree.deserialize(t[0])));
  console.log('Invert tree', t[0], '->', actual);
  console.assert(t[1] === actual);
});
