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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  let sum = 0;
  // Helper with closure of L, R, and sum
  const recHelper = node => {
    if (node == null) return;
    if (node.val >= L && node.val <= R) sum += node.val;
    if (node.val > L) recHelper(node.left);
    if (node.val < R) recHelper(node.right);
  };
  recHelper(root);
  return sum;
};
// TESTS
[
  {
    tree: '10,5,3,#,#,7,#,#,15,#,18,#,#',
    L: 7,
    R: 15,
    expected: 32
  },
  {
    tree: '10,5,3,1,#,#,#,7,6,#,#,#,15,13,#,#,18,#,#',
    L: 6,
    R: 10,
    expected: 23
  }
].forEach(t => {
  const root = Tree.deserialize(t.tree);
  const actual = rangeSumBST(root, t.L, t.R);
  console.log('Range sum of', t.tree, t.L, t.R, '->', actual);
});
