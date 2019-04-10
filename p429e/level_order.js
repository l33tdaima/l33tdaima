/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let ans = [];
  if (root == null) return ans;
  const recPreorder = function(node, level) {
    if (node == null) return;
    if (ans[level]) ans[level].push(node.val);
    else ans.push([node.val]);
    for (let c of node.children) recPreorder(c, level + 1);
  };
  recPreorder(root, 0);
  return ans;
};
