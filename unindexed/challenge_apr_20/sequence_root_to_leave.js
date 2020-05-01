/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const Tree = require('binary_tree');
/**
 * @param {TreeNode} root
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function (root, arr) {
  console.assert(arr.length > 0);
  const recHelper = (node, i) => {
    if (node == null) return false;
    if (arr[i] != node.val) return false;
    if (i === arr.length - 1) return node.left == null && node.right == null;
    return recHelper(node.left, i + 1) || recHelper(node.right, i + 1);
  };
  return recHelper(root, 0);
};
// TESTS
[
  ['0,#,#', [0], true],
  ['0,#,#', [1], false],
  ['0,1,#,#,#', [0, 1], true],
  ['0,1,#,#,#', [0, 1, 2], false],
  ['0,#,1,#,#', [0, 1], true],
  ['0,#,1,#,#', [0, 1, 2], false],
  ['0,#,1,#,#', [0], false],
  ['0,#,1,#,#', [0], false],
  ['0,1,0,#,1,#,#,1,0,#,#,0,#,#,0,0,#,#,#', [0, 1, 0, 1], true],
  ['0,1,0,#,1,#,#,1,0,#,#,0,#,#,0,0,#,#,#', [0, 0], false],
  ['0,1,0,#,1,#,#,1,0,#,#,0,#,#,0,0,#,#,#', [0, 1, 1], false],
].forEach((t) => {
  const root = Tree.deserialize(t[0]);
  console.log('Is', t[1], 'valid sequence in tree', t[0], '->', t[2]);
  console.assert(isValidSequence(root, t[1]) === t[2]);
});
