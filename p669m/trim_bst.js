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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  if (!root) return root;
  if (root.val < low) {
    return trimBST(root.right, low, high);
  } else if (root.val > high) {
    return trimBST(root.left, low, high);
  } else {
    root.left = trimBST(root.left, low, root.val);
    root.right = trimBST(root.right, root.val, high);
    return root;
  }
};
// TESTS
[
  ['1,0,#,#,2,#,#', 1, 2, '1,#,2,#,#'],
  ['3,0,#,2,1,#,#,#,4,#,#', 1, 3, '3,2,1,#,#,#,#'],
  ['1,#,#', 1, 2, '1,#,#'],
  ['1,#,2,#,#', 1, 3, '1,#,2,#,#'],
  ['1,#,2,#,#', 2, 4, '2,#,#'],
].forEach(([tree, low, high, expected]) => {
  const root = Tree.deserialize(tree);
  const actual = Tree.serialize(trimBST(root, low, high));
  console.log('Trim BST', tree, '->', actual);
  console.assert(actual === expected);
});
