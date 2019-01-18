/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const Tree = require("binary_tree");
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (p == null && q == null) return true;
  if (p == null || q == null) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
// TESTS
[
  {
    p: "1,2,#,#,3,#,#",
    q: "1,2,#,#,3,#,#",
    expected: true
  },
  {
    p: "1,2,#,#,#",
    q: "1,#,2,#,#",
    expected: false
  },
  {
    p: "1,2,#,#,1,#,#",
    q: "1,1,#,#,2,#,#",
    expected: false
  },
  {
    p: "10,5,#,#,15,#,#",
    q: "10,5,#,15,#,#,#",
    expected: false
  }
].forEach(t => {
  const p = Tree.deserialize(t.p);
  const q = Tree.deserialize(t.q);
  const actual = isSameTree(p, q);
  console.log("Is", t.p, "and", t.q, "the same ->", actual);
  console.assert(actual === t.expected);
});
