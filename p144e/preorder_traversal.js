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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (root == null) return [];
  let ans = [];
  const stack = [root];
  while (stack.length > 0) {
    let node = stack.pop();
    ans.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return ans;
};
// TESTS
[
  ['#', []],
  ['1,#,#', [1]],
  ['1,2,#,#,3,#,#', [1, 2, 3]],
  ['1,#,2,3,#,#,#', [1, 2, 3]],
  ['1,2,#,#,3,#,4,#,#', [1, 2, 3, 4]],
].forEach(([array, expected]) => {
  let actual = preorderTraversal(Tree.deserialize(array));
  console.log('Preorder traversal of', array, '->', actual);
  console.assert(actual.toString() === expected.toString());
});
