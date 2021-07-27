/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const Tree = require('binary_tree');
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length == 0) return null;
  let mid = ~~(nums.length / 2);
  let root = new Tree.TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  return root;
};
// TESTS
[
  [[-10, -3, 0, 5, 9], '0,-3,-10,#,#,#,9,5,#,#,#'],
  [[1, 3], '3,1,#,#,#'],
  [[], '#'],
].forEach(([nums, expected]) => {
  const actual = Tree.serialize(sortedArrayToBST(nums));
  console.log('Convert', nums, 'to BST ->', actual);
  console.assert(actual === expected);
});
