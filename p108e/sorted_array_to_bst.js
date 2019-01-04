/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const Tree = require("binary_tree");
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums == null || nums.length === 0) return null;
  let midIndex = ~~(nums.length / 2);
  let root = new Tree.TreeNode(nums[midIndex]);
  root.left = sortedArrayToBST(nums.slice(0, midIndex));
  root.right = sortedArrayToBST(nums.slice(midIndex + 1));
  return root;
};
// TESTS
[
  [],
  [1],
  [1, 2],
  [1, 2, 3],
  [1, 2, 3, 4],
  [-10, -3, 0, 5, 9],
  [-10, -8, -5, -3, 0, 2, 5, 8, 9]
].forEach(t => {
  const tree = sortedArrayToBST(t);
  console.log("Convert", t, "to BST ->", Tree.serialize(tree));
});
