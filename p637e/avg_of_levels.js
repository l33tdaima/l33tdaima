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
var averageOfLevelsBFS = function(root) {
  let ans = [];
  if (root == null) return ans;
  let queue = [root];
  while (queue.length > 0) {
    let sum = 0;
    let count = queue.length;
    for (let i = 0; i < count; ++i) {
      let node = queue.shift();
      sum += node.val;
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    ans.push(sum / count);
  }
  return ans;
};
var averageOfLevelsDFS = function(root) {
  let levels = [];
  const recPreorder = function(node, level) {
    if (node == null) return;
    if (levels[level]) levels[level].push(node.val);
    else levels.push([node.val]);
    recPreorder(node.left, level + 1);
    recPreorder(node.right, level + 1);
  };
  recPreorder(root, 0);
  return levels.map(level => {
    let sum = level.reduce((prev, n) => prev + n, 0);
    return sum / level.length;
  });
};

// TEST
[
  '1',
  '1,2,#,#,3,#,#',
  '1,2,3,4,#,#,#,#,#',
  '1,#,2,#,3,#,4,#,#',
  '1,#,2,3,4,#,#,#,#',
  '1,#,2,3,#,#,4,#,#',
  '1,2,4,#,#,5,#,7,#,#,3,6,#,8,#,#,#',
  '3,9,#,#,20,15,#,#,7,#,#'
].forEach(t => {
  let root = Tree.deserialize(t);
  console.log('Average of levels of', t, '->', averageOfLevelsBFS(root));
});
