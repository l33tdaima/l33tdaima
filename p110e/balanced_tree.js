/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *    this.val = val;
 *    this.left = this.right = null;
 * }
 */
const Tree = require("binary_tree");
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  const recIsBalanced = function(r) {
    if (r == null) return { maxDepth: 0, isBalanced: true };
    let leftRes = recIsBalanced(r.left);
    let rightRes = recIsBalanced(r.right);
    return {
      maxDepth: Math.max(leftRes.maxDepth, rightRes.maxDepth) + 1,
      isBalanced:
        leftRes.isBalanced &&
        rightRes.isBalanced &&
        Math.abs(leftRes.maxDepth - rightRes.maxDepth) <= 1
    };
  };
  return recIsBalanced(root).isBalanced;
};

[
  "1,#,2,#,3,#,#",
  "1,2,#,#,3,#,#",
  "3,9,#,#,20,15,#,#,7,#,#",
  "1,2,3,4,#,#,4,#,#,3,#,#,2,#,#"
].forEach(t => {
  const tree = Tree.deserialize(t);
  console.log("Is", t, "balanced? ->", isBalanced(tree));
});
