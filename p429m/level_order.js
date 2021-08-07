/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
const NaryTree = require('n_ary_tree');
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let ans = [];
  if (root == null) return ans;

  const recPreorder = (node, level) => {
    if (node == null) return;
    if (ans[level]) ans[level].push(node.val);
    else ans.push([node.val]);
    for (let c of node.children) recPreorder(c, level + 1);
  };

  recPreorder(root, 0);
  return ans;
};
// TESTS
[
  '',
  '1 0',
  '1 1 2 0',
  '1 2 2 0 3 0',
  '1 3 2 0 3 0 4 0',
  '1 3 3 2 5 0 6 0 2 0 4 0',
].forEach((t) => {
  const tree = NaryTree.deserialize(t);
  console.log('Level order traversal of', t, '->', levelOrder(tree));
});
