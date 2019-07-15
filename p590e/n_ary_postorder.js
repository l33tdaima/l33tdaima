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
 * @return {number[]}
 */
var postorder = function(root) {
  let ans = [];
  if (root == null) return ans;
  let stack = [root];
  while (stack.length > 0) {
    let node = stack.pop();
    ans.unshift(node.val);
    for (let c of node.children) {
      stack.push(c);
    }
  }
  return ans;
};
// TESTS
[
  ['', []],
  ['1 0', [1]],
  ['1 1 2 0', [2, 1]],
  ['1 2 2 0 3 0', [2, 3, 1]],
  ['1 3 2 0 3 0 4 0', [2, 3, 4, 1]],
  ['1 3 3 2 5 0 6 0 2 0 4 0', [5, 6, 3, 2, 4, 1]],
  ['1 2 10 2 5 0 0 0 3 1 6 0', [5, 0, 10, 6, 3, 1]]
].forEach(t => {
  const tree = NaryTree.deserialize(t[0]);
  actual = postorder(tree);
  console.log('Postorder traversal of', t, '->', actual);
  console.assert(actual.length === t[1].length);
  for (let i = 0; i < actual.length; ++i) {
    console.assert(actual[i] === t[1][i]);
  }
});
