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
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
  if (root == null) return null;
  if (root.val < L) {
    return trimBST(root.right, L, R);
  } else if (root.val > R) {
    return trimBST(root.left, L, R);
  } else {
    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R);
    return root;
  }
};
// TESTS
[
  { tree: '#', L: 1, R: 2, expected: '#' },
  {
    tree: '1,0,#,#,2,#,#',
    L: 1,
    R: 2,
    expected: '1,#,2,#,#'
  },
  {
    tree: '3,0,#,2,#,1,#,#,#,4,#,#',
    L: 1,
    R: 3,
    expected: '3,2,#,1,#,#,#'
  }
].forEach(t => {
  const root = Tree.deserialize(t.tree);
  const actual = Tree.serialize(trimBST(root, t.L, t.R));
  console.log('Trim tree', t.tree, '->', actual);
  console.assert(actual === t.expected);
});
