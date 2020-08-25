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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let recHelper = function (rt, isLeft) {
    if (rt == null) return 0;
    if (rt.left == null && rt.right == null) {
      return isLeft ? rt.val : 0;
    } else {
      return recHelper(rt.left, true) + recHelper(rt.right, false);
    }
  };
  return recHelper(root, false);
};
// TEST
[
  ['#', 0],
  ['1,#,#', 0],
  ['1,2,#,#,#', 2],
  ['1,#,3,#,#', 0],
  ['1,2,#,#,3,#,#', 2],
  ['3,9,#,#,20,15,#,#,7,#,#', 24],
].forEach((t) => {
  const actual = sumOfLeftLeaves(Tree.deserialize(t[0]));
  console.log('Sum of left leaves of', t[0], '->', actual);
  console.assert(actual === t[1]);
});
