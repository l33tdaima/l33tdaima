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
var preorder = function(root) {
  let ans = [];
  if (root == null) return ans;
  let stack = [root];
  while (stack.length > 0) {
    let node = stack.pop();
    ans.push(node.val);
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
  }
  return ans;
};
// TESTS
[
  ['', []],
  ['1 0', [1]],
  ['1 1 2 0', [1, 2]],
  ['1 2 2 0 3 0', [1, 2, 3]],
  ['1 3 2 0 3 0 4 0', [1, 2, 3, 4]],
  ['1 3 3 2 5 0 6 0 2 0 4 0', [1, 3, 5, 6, 2, 4]]
].forEach(t => {
  const tree = NaryTree.deserialize(t[0]);
  (actual = preorder(tree)),
    console.log('Level order traversal of', t, '->', actual);
  console.assert(actual.length == t[1].length);
  for (let i = 0; i < actual.length; ++i) {
    console.assert(actual[i], t[1][i]);
  }
});
