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
var preorderTraversal = function(root) {
  let ans = [];
  if (root == null) return ans;
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
  ['1,2,#,#,3,#,4,#,#', [1, 2, 3, 4]]
].forEach(t => {
  let tree = Tree.deserialize(t[0]);
  let actual = preorderTraversal(tree);
  console.log('Preorder traversal of', t[0], '->', actual);
  console.assert(actual.length === t[1].length);
  for (let i = 0; i < actual.length; ++i) console.assert(actual[i] === t[1][i]);
});
