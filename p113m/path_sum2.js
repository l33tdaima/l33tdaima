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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let result = [];
  const dfs = (p, s, path) => {
    if (p == null) return;

    path.push(p.val);
    if (p.left === null && p.right === null && p.val === s)
      result.push(Array.from(path));
    dfs(p.left, s - p.val, path);
    dfs(p.right, s - p.val, path);
    path.pop(p.val);
  };

  dfs(root, sum, new Array());
  return result;
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
  ['1,2,#,#,3,#,#', 4, [[1, 3]]],
  ['1,2,#,#,#', 0, []],
  ['1,2,#,#,#', 3, [[1, 2]]],
  ['#', 0, []],
].forEach(([tree, targetSum, expected]) => {
  let actual = pathSum(Tree.deserialize(tree), targetSum);
  console.log(tree, 'all paths with sum equals', targetSum, '->', actual);
  console.assert(actual.toString() === expected.toString());
});
