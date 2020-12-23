/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *    this.val = val;
 *    this.left = this.right = null;
 * }
 */
const Tree = require('binary_tree');
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  const recIsBalanced = (r) => {
    if (!r) return [true, 0];
    let [leftRes, leftHt] = recIsBalanced(r.left);
    let [rightRes, rightHt] = recIsBalanced(r.right);
    return [
      leftRes && rightRes && Math.abs(leftHt - rightHt) <= 1,
      Math.max(leftHt, rightHt) + 1,
    ];
  };
  return recIsBalanced(root)[0];
};

[
  ['#', true],
  ['1,#,#', true],
  ['1,2,#,#,#', true],
  ['1,#,2,#,3,#,#', false],
  ['1,2,#,#,3,#,#', true],
  ['3,9,#,#,20,15,#,#,7,#,#', true],
  ['1,2,3,4,#,#,4,#,#,3,#,#,2,#,#', false],
].forEach(([tree, expected]) => {
  const actual = isBalanced(Tree.deserialize(tree));
  console.log('Is', tree, 'balanced? ->', actual);
  console.assert(actual === expected);
});
