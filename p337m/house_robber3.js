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
var rob = function (root) {
  // For the given tree node,
  // return the local max for the node is not robbed and robbed
  const recMaxRob = function (node) {
    if (node == null) return [0, 0];
    let lt = recMaxRob(node.left);
    let rt = recMaxRob(node.right);
    let notRobbed = Math.max(...lt) + Math.max(...rt);
    let robbed = node.val + lt[0] + rt[0];
    return [notRobbed, robbed];
  };
  return Math.max(...recMaxRob(root));
};

[
  ['', 0],
  ['1', 1],
  ['4,1,2,3,#,#,#,#,#', 7],
  ['3,2,#,3,#,#,3,#,1,#,#', 7],
  ['3,4,1,#,#,3,#,#,5,#,1,#,#', 9],
].forEach(([tree, expected]) => {
  const actual = rob(Tree.deserialize(tree));
  console.log('Max amount of robbery from', tree, '->', actual);
  console.assert(actual === expected);
});
