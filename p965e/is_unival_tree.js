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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  if (root == null) return true;
  if (root.left && root.left.val !== root.val) return false;
  if (root.right && root.right.val !== root.val) return false;
  return isUnivalTree(root.left) && isUnivalTree(root.right);
};

[
  ['#', true],
  ['1,#,#', true],
  ['1,#,2,#,#', false],
  ['1,1,1,#,#,1,#,#,1,#,1,#,#', true],
  ['2,2,5,#,#,2,#,#,2,#,#', false]
].forEach(t => {
  const actual = isUnivalTree(Tree.deserialize(t[0]));
  console.log('Is', t[0], 'univalued ->', actual);
  console.assert(actual === t[1]);
});
