/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const Tree = require("binary_tree");
/**
 * @param {TreeNode} root
 * @param {number} V
 * @return {TreeNode[]}
 */
var splitBST = function(root, V) {
  if (root === null) {
    return [null, null];
  } else if (V === root.val) {
    let larger = root.right;
    root.right = null;
    return [root, larger];
  } else if (V < root.val) {
    let [smaller, larger] = splitBST(root.left, V);
    root.left = larger;
    return [smaller, root];
  } else {
    // root.val > V
    let [smaller, larger] = splitBST(root.right, V);
    root.right = smaller;
    return [root, larger];
  }
};
[
  ["#", 0],
  ["5,#,#", 4],
  ["5,#,#", 5],
  ["5,2,#,#,#", 5],
  ["5,2,#,#,#", 3],
  ["5,2,#,#,#", 1],
  ["5,2,#,#,#", 7],
  ["5,#,8,#,#", 3],
  ["5,#,8,#,#", 9],
  ["5,#,8,#,#", 6],
  ["5,#,8,#,#", 5],
  ["5,2,#,#,8,#,#", 1],
  ["5,2,#,#,8,#,#", 2],
  ["5,2,#,#,8,#,#", 4],
  ["5,2,#,#,8,#,#", 5],
  ["5,2,#,#,8,#,#", 6],
  ["5,2,#,#,8,#,#", 8],
  ["5,2,#,#,8,#,#", 9]
].forEach(t => {
  let root = Tree.deserialize(t[0]);
  let [smaller, larger] = splitBST(root, t[1]);
  console.log("Split BST", t[0], "by", t[1], "->");
  console.log("  ", Tree.serialize(smaller), "|", Tree.serialize(larger));
});
