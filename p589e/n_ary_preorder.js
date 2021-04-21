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
var preorder = function (root) {
  let ans = [];
  if (!root) return ans;
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
  ['1 3 3 2 5 0 6 0 2 0 4 0', [1, 3, 5, 6, 2, 4]],
  [
    '1 4 2 0 3 2 6 0 7 1 11 1 14 0 4 1 8 1 12 0 5 2 9 1 13 0 10 0',
    [1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5, 9, 13, 10],
  ],
].forEach(([tree, expected]) => {
  const actual = preorder(NaryTree.deserialize(tree));
  console.log('Level order traversal of', tree, '->', actual);
  console.assert(actual.toString() === expected.toString());
});
