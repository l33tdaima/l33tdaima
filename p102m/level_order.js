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
 * @return {number[][]}
 */
var levelOrderBFS = function(root) {
  let ans = [];
  if (root == null) return ans;
  const queue = [[root, 0]];
  while (queue.length > 0) {
    // update iteration queue
    let [node, level] = queue.shift();
    if (node.left) queue.push([node.left, level + 1]);
    if (node.right) queue.push([node.right, level + 1]);
    // update result array
    if (ans[level]) ans[level].push(node.val);
    else ans.push([node.val]);
  }
  return ans;
};
var levelOrderDFS = function(root) {
  let ans = [];
  const recPreorder = function(node, level) {
    if (node == null) return;
    if (ans[level]) ans[level].push(node.val);
    else ans.push([node.val]);
    recPreorder(node.left, level + 1);
    recPreorder(node.right, level + 1);
  };
  recPreorder(root, 0);
  return ans;
};
[
  '1',
  '1,2,#,#,3,#,#',
  '1,2,3,4,#,#,#,#,#',
  '1,#,2,#,3,#,4,#,#',
  '1,#,2,3,4,#,#,#,#',
  '1,#,2,3,#,#,4,#,#',
  '1,2,4,#,#,5,#,7,#,#,3,6,#,8,#,#,#',
  '3,9,#,#,20,15,#,#,7,#,#'
].forEach(t => {
  const tree = Tree.deserialize(t);
  console.log('Level order traversal ->', levelOrderDFS(tree));
});
