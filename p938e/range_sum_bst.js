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
var rangeSumBST = function (root, low, high) {
  let sum = 0;
  // Helper with closure of L, R, and sum
  const recHelper = (node) => {
    if (node == null) return;
    if (node.val >= low && node.val <= high) sum += node.val;
    if (node.val > low) recHelper(node.left);
    if (node.val < high) recHelper(node.right);
  };
  recHelper(root);
  return sum;
};
// TESTS
[
  {
    tree: '10,5,3,#,#,7,#,#,15,#,18,#,#',
    low: 7,
    high: 15,
    expected: 32,
  },
  {
    tree: '10,5,3,1,#,#,#,7,6,#,#,#,15,13,#,#,18,#,#',
    low: 6,
    high: 10,
    expected: 23,
  },
].forEach(({ tree, low, high, expected }) => {
  const actual = rangeSumBST(Tree.deserialize(tree), low, high);
  console.log('Range sum of', tree, low, high, '->', actual);
  console.assert(actual === expected);
});
