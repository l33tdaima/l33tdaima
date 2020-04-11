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
var diameterOfBinaryTree = function (root) {
  const helper = (node) => {
    if (node == null) return [0, 0];
    const [ldia, ldep] = helper(node.left);
    const [rdia, rdep] = helper(node.right);
    return [Math.max(ldia, rdia, ldep + rdep), Math.max(ldep, rdep) + 1];
  };
  const [dia] = helper(root);
  return dia;
};
// TEST
[
  ['#', 0],
  ['1,#,#', 0],
  ['1,2,#,#,#', 1],
  ['1,2,#,#,3,#,#', 2],
  ['1,2,4,#,#,5,#,#,3,#,#', 3],
  ['1,2,4,6,7,#,#,#,#,5,#,8,#,9,#,#,3,#,#', 6],
].forEach((t) => {
  const tree = Tree.deserialize(t[0]);
  const actual = diameterOfBinaryTree(tree);
  console.log('Diagmeter of', t[0], '->', actual);
  console.assert(actual === t[1]);
});
