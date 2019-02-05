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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (root == null) return null;
  if (root.val === val) return root;
  else if (val < root.val) return searchBST(root.left, val);
  else return searchBST(root.right, val);
};
// TESTS
[
  ["#", 0],
  ["1,#,#", 1],
  ["4,2,1,#,#,3,#,#,7,#,#", 2],
  ["4,2,1,#,#,3,#,#,7,#,#", 1],
  ["4,2,1,#,#,3,#,#,7,#,#", 7],
  ["4,2,1,#,#,3,#,#,7,#,#", 5]
].forEach(t => {
  const root = Tree.deserialize(t[0]);
  const found = searchBST(root, t[1]);
  console.log("Search", t[1], "in", t[0], "->", Tree.serialize(found));
});
