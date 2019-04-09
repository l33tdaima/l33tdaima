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
var maxDepth = function(root) {
  if (root == null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
// TESTS
[
  '1',
  '1,2,#,#,3,#,#',
  '1,2,3,4,#,#,#,#,#',
  '1,#,2,#,3,#,4,#,#',
  '1,#,2,3,4,#,#,#,#',
  '1,#,2,3,#,#,4,#,#',
  '1,2,4,#,#,5,#,7,#,#,3,6,#,8,#,#,#',
  '3,9,#,#,20,15,#,#,7,#,#'
].forEach(t => {
  const tree = Tree.deserialize(t);
  console.log('Max depth of', t, '->', maxDepth(tree));
});
