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
var inorderTraversal = function(root) {
  let ans = [];
  let stack = [];
  let node = root;
  while (node != null || stack.length > 0) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    ans.push(node.val);
    node = node.right;
  }
  return ans;
};

[
  ['#', []],
  ['1,#,#', [1]],
  ['1,2,#,#,3,#,#', [2, 1, 3]],
  ['1,2,3,4,#,#,#,#,#', [4, 3, 2, 1]],
  ['1,#,2,#,3,#,4,#,#', [1, 2, 3, 4]],
  ['1,#,2,3,4,#,#,#,#', [1, 4, 3, 2]],
  ['1,2,4,#,#,5,#,7,#,#,3,6,#,8,#,#,#', [4, 2, 5, 7, 1, 6, 8, 3]]
].forEach(t => {
  let tree = Tree.deserialize(t[0]);
  const actual = inorderTraversal(tree);
  console.log('Inorder traversal of', t[0], '->', actual);
  console.assert(actual.length === t[1].length);
  for (let i = 0; i < actual.length; ++i) console.assert(actual[i] === t[1][i]);
});
