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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  let ans = [];
  if (root == null) return ans;
  let queue = [root];
  let leftToRight = true;
  while (queue.length > 0) {
    let level = [];
    let count = queue.length;
    for (let i = 0; i < count; ++i) {
      let node = queue.shift();
      if (leftToRight) level.push(node.val);
      else level.unshift(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    leftToRight = !leftToRight;
    ans.push(level);
  }
  return ans;
};
// TEST
[
  '1,#,#',
  '1,2,#,#,3,#,#',
  '1,2,3,4,#,#,#,#,#',
  '1,#,2,#,3,#,4,#,#',
  '1,#,2,3,4,#,#,#,#',
  '1,#,2,3,#,#,4,#,#',
  '3,9,#,#,20,15,#,#,7,#,#',
  '3,9,#,11,#,#,20,15,#,#,7,#,#'
].forEach(t => {
  let tree = Tree.deserialize(t);
  console.log('Zigzag of', t, '->', zigzagLevelOrder(tree));
});
