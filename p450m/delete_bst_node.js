/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const Tree = require('binary_tree');

const findMin = function (root) {
  while (root.left !== null) root = root.left;
  return root.val;
};

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root == null) return null;
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;
    // pick the min from right as the replacement of deleted root
    let minVal = findMin(root.right);
    root.val = minVal;
    root.right = deleteNode(root.right, minVal);
  }
  return root;
};
// TEST
[
  ['#', 1, '#'],
  ['1,#,#', 2, '1,#,#'],
  ['1,#,#', 1, '#'],
  ['1,#,2,#,#', 1, '2,#,#'],
  ['2,1,#,#,3,#,#', 2, '3,1,#,#,#'],
  ['2,1,#,#,3,#,#', 3, '2,1,#,#,#'],
  ['5,3,2,#,#,4,#,#,6,#,7,#,#', 3, '5,4,2,#,#,#,6,#,7,#,#'],
].forEach((t) => {
  const actual = Tree.serialize(deleteNode(Tree.deserialize(t[0]), t[1]));
  console.log('Delete', t[1], 'from', t[0], '->', actual);
  console.assert(t[2] === actual);
});
