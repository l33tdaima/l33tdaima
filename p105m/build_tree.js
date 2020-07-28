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
  console.assert(preorder.length === inorder.length);
  if (preorder.length === 0) return null;
  let root = new Tree.TreeNode(preorder[0]);
  // find the root index at the inorder array
  let rootAtInorder = inorder.findIndex((element) => element === preorder[0]);
  // this number is also the length we want to cut in preorder
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

var testData = [
  { pre: [1], in: [1] },
  { pre: [1, 2], in: [2, 1] },
  { pre: [1, 2], in: [1, 2] },
  { pre: [1, 2, 3], in: [2, 1, 3] },
  { pre: [1, 2, 3], in: [3, 2, 1] },
  { pre: [1, 2, 3], in: [1, 2, 3] },
  { pre: [1, 2, 3, 4], in: [2, 1, 4, 3] },
];
testData.forEach(function (test) {
  console.log('Build tree ->', Tree.serialize(buildTree(test.pre, test.in)));
});
