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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let pre = null;
  // @param {TreeNode} current node
  // @return {TreeNode} the tail after flattened the child
  const helper = (p) => {
    if (p == null) return p;
    helper(p.right);
    helper(p.left);
    [p.left, p.right] = [null, pre];
    pre = p;
  };

  helper(root);
};

const f = (a, b) => [a, b];
[
  f('#', '#'),
  f('0,#,#', '0,#,#'),
  f('1,2,#,#,#', '1,#,2,#,#'),
  f('1,#,2,#,#', '1,#,2,#,#'),
  f('1,2,#,#,3,#,#', '1,#,2,#,3,#,#'),
  f('1,2,3,#,#,#,#', '1,#,2,#,3,#,#'),
  f('1,#,2,#,3,#,#', '1,#,2,#,3,#,#'),
  f('1,2,3,#,#,4,#,#,5,#,6,#,#', '1,#,2,#,3,#,4,#,5,#,6,#,#'),
].forEach(([tree, expected]) => {
  let root = Tree.deserialize(tree);
  flatten(root);
  let actual = Tree.serialize(root);
  console.log('Flatten', tree, '->', actual);
  console.assert(actual === expected);
});
