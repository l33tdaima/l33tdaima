/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const Tree = require('binary_tree');
var generateTrees = function (n) {
  /**
   * @param {number} s: start
   * @param {number} e: end
   * @return {TreeNode[]}
   */
  const recTrees = function (s, e) {
    if (s > e) return [null];
    let trees = [];
    for (let root = s; root <= e; ++root) {
      let ltrees = recTrees(s, root - 1);
      for (let left of ltrees) {
        let rtrees = recTrees(root + 1, e);
        for (let right of rtrees) {
          let node = new Tree.TreeNode(root);
          node.left = left;
          node.right = right;
          trees.push(node);
        }
      }
    }
    return trees;
  };
  return recTrees(1, n);
};

// TESTS
[1, 2, 3, 4].forEach((n) => {
  console.log(
    'Unique BST of n =',
    n,
    '->',
    generateTrees(n).map(Tree.serialize)
  );
});
