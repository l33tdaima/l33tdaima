/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const Tree = require('binary_tree');
var bstFromPreorderON2 = function (preorder) {
  if (preorder.length === 0) return null;
  let root = new Tree.TreeNode(preorder[0]);
  let sp = 1;
  while (sp < preorder.length && preorder[sp] < preorder[0]) sp++;
  root.left = bstFromPreorder(preorder.slice(1, sp));
  root.right = bstFromPreorder(preorder.slice(sp));
  return root;
};

var bstFromPreorderON = function (preorder) {
  let i = 0;
  const recHelper = (bound = Number.MAX_SAFE_INTEGER) => {
    if (i === preorder.length || preorder[i] > bound) return null;
    let root = new Tree.TreeNode(preorder[i++]);
    root.left = recHelper(root.val);
    root.right = recHelper(bound);
    return root;
  };
  return recHelper(preorder);
};

[
  [[], '#'],
  [[1], '1,#,#'],
  [[2, 1], '2,1,#,#,#'],
  [[2, 3], '2,#,3,#,#'],
  [[2, 1, 3], '2,1,#,#,3,#,#'],
  [[8, 5, 1, 7, 10, 12], '8,5,1,#,#,7,#,#,10,#,12,#,#'],
].forEach(([preorder, expected]) => {
  const actual = Tree.serialize(bstFromPreorderON(preorder));
  console.log('BST from preorder traversal', preorder, '->', actual);
  console.assert(actual === expected);
});
