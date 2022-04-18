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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let count = 0;
  const recInOrder = function (node) {
    if (node == null) return null;
    let lret = recInOrder(node.left);
    if (lret) return lret;
    if (++count === k) return node.val;
    return recInOrder(node.right);
  };
  return recInOrder(root);
};
// TEST
[
  ['1,#,#', 1, 1],
  ['2,1,#,#,3,#,#', 2, 2],
  ['2,1,#,#,3,#,#', 3, 3],
  ['5,3,2,#,#,4,#,#,6,#,7,#,#', 1, 2],
  ['5,3,2,#,#,4,#,#,6,#,7,#,#', 2, 3],
  ['5,3,2,#,#,4,#,#,6,#,7,#,#', 3, 4],
  ['5,3,2,#,#,4,#,#,6,#,7,#,#', 4, 5],
  ['5,3,2,#,#,4,#,#,6,#,7,#,#', 5, 6],
  ['5,3,2,#,#,4,#,#,6,#,7,#,#', 6, 7],
].forEach(([array, k, expected]) => {
  const tree = Tree.deserialize(array);
  const actual = kthSmallest(tree, k);
  console.log('The', k + '-th smallest value in BST', array, '->', actual);
  console.assert(actual === expected);
});
