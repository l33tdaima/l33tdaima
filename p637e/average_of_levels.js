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
 * @return {number[]}
 */
var averageOfLevelsDFS = function (root) {
  let levels = [];
  const recPreorder = function (node, level) {
    if (node == null) return;
    if (levels[level]) levels[level].push(node.val);
    else levels.push([node.val]);
    recPreorder(node.left, level + 1);
    recPreorder(node.right, level + 1);
  };
  recPreorder(root, 0);
  return levels.map((level) => {
    let sum = level.reduce((prev, n) => prev + n, 0);
    return sum / level.length;
  });
};

// TEST
const f = (tree, expected) => [tree, expected];
[
  f('1', [1]),
  f('1,2,#,#,3,#,#', [1, 2.5]),
  f('1,2,3,4,#,#,#,#,#', [1, 2, 3, 4]),
  f('1,#,2,#,3,#,4,#,#', [1, 2, 3, 4]),
  f('1,#,2,3,4,#,#,#,#', [1, 2, 3, 4]),
  f('1,#,2,3,#,#,4,#,#', [1, 2, 3.5]),
  f('1,2,4,#,#,5,#,7,#,#,3,6,#,8,#,#,#', [1, 2.5, 5, 7.5]),
  f('3,9,#,#,20,15,#,#,7,#,#', [3, 14.5, 11]),
].forEach(([tree, expected]) => {
  const actual = averageOfLevelsDFS(Tree.deserialize(tree));
  console.log('Average of levels of', tree, '->', actual);
  console.assert(actual.toString() === expected.toString());
});
