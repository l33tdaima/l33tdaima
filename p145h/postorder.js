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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  let ans = [];
  if (root == null) return ans;
  let stack = [root];
  while (stack.length > 0) {
    let node = stack.pop();
    ans.unshift(node.val);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return ans;
};
// TESTS
[
  ['', []],
  ['1,#,#', [1]],
  ['1,#,2,#,#', [2, 1]],
  ['1,2,#,#,3,#,#', [2, 3, 1]],
  ['1,#,4,3,#,2,#,#', [2, 3, 4, 1]],
  ['1,3,5,#,#,6,#,#,4,2,#,#,#', [5, 6, 3, 2, 4, 1]],
  ['1,10,5,#,#,0,#,#,3,#,6,#,#', [5, 0, 10, 6, 3, 1]]
].forEach(t => {
  const tree = Tree.deserialize(t[0]);
  actual = postorderTraversal(tree);
  console.log('Postorder traversal of', t, '->', actual);
  console.assert(actual.length === t[1].length);
  for (let i = 0; i < actual.length; ++i) {
    console.assert(actual[i] === t[1][i]);
  }
});
