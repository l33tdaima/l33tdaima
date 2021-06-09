/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const Tree = require('binary_tree');
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null;
  // find the root index at the inorder array
  let rootAtInorder = inorder.findIndex((element) => element === preorder[0]);
  let root = new Tree.TreeNode(preorder[0]);
  root.left = buildTree(
    preorder.slice(1, rootAtInorder + 1),
    inorder.slice(0, rootAtInorder)
  );
  root.right = buildTree(
    preorder.slice(rootAtInorder + 1),
    inorder.slice(rootAtInorder + 1)
  );
  return root;
};

[
  { preorder: [1], inorder: [1], expected: '1,#,#' },
  { preorder: [1, 2], inorder: [2, 1], expected: '1,2,#,#,#' },
  { preorder: [1, 2], inorder: [1, 2], expected: '1,#,2,#,#' },
  {
    preorder: [3, 9, 20, 15, 7],
    inorder: [9, 3, 15, 20, 7],
    expected: '3,9,#,#,20,15,#,#,7,#,#',
  },
].forEach(({ preorder, inorder, expected }) => {
  const actual = Tree.serialize(buildTree(preorder, inorder));
  console.log('Build tree ->', actual);
  console.assert(actual === expected);
});
