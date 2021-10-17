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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let ans = [];
  const dfs = (node, s, path) => {
    if (node == null) return;
    path.push(node.val);
    if (node.val === s && node.left == null && node.right == null)
      ans.push(Array.from(path));
    dfs(node.left, s - node.val, path);
    dfs(node.right, s - node.val, path);
    path.pop();
  };

  dfs(root, targetSum, []);
  return ans;
};

[
  [
    '5,4,11,7,#,#,2,#,#,#,8,13,#,#,4,5,#,#,1,#,#',
    22,
    [
      [5, 4, 11, 2],
      [5, 8, 4, 5],
    ],
  ],
  ['1,2,#,#,3,#,#', 5, []],
  ['1,2,#,#,#', 0, []],
  ['1,2,#,#,3,#,#', 4, [[1, 3]]],
  ['1,2,#,#,#', 3, [[1, 2]]],
  ['#', 0, []],
].forEach(([tree, targetSum, expected]) => {
  let actual = pathSum(Tree.deserialize(tree), targetSum);
  console.log(tree, 'all paths with sum equals', targetSum, '->', actual);
  console.assert(actual.toString() === expected.toString());
});
