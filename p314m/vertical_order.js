/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
let Tree = require('binary_tree');
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
  const map = new Map();
  let [min, max] = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
  let ans = [];
  if (root == null) return ans;
  const queue = [[0, root]];
  while (queue.length > 0) {
    let [order, node] = queue.shift();
    min = Math.min(min, order);
    max = Math.max(max, order);
    let v = map.get(order) || [];
    v.push(node.val);
    map.set(order, v);
    if (node.left) queue.push([order - 1, node.left]);
    if (node.right) queue.push([order + 1, node.right]);
  }

  for (let i = min; i <= max; ++i) {
    if (map.has(i)) ans.push(map.get(i));
  }
  return ans;
};
//TEST
[
  '3,9,#,#,20,15,#,#,7,#,#',
  '3,9,4,#,#,0,#,#,8,1,#,#,7,#,#',
  '3,9,4,#,#,0,#,2,#,#,8,1,5,#,#,#,7,#,#'
].forEach(t => {
  let tree = Tree.deserialize(t);
  console.log('Vertical order traversal of', t, '->', verticalOrder(tree));
});
