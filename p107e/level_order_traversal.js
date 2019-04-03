/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const Tree = require("binary_tree");

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottomBFS = function(root) {
  let [ans, queue, depth] = [[], [], 0];
  if (root == null) return ans;
  queue.push([root, 0]);
  ans.push([]);
  while (queue.length > 0) {
    let [node, d] = queue.shift();
    if (d !== depth) {
      ans.unshift([]);
      depth = d;
    }
    ans[0].push(node.val);
    if (node.left) queue.push([node.left, d + 1]);
    if (node.right) queue.push([node.right, d + 1]);
  }
  return ans;
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottomDFS = function(root) {
  let ans = [];
  const recPostorder = function(node, level) {
    if (node == null) return;
    if (level >= ans.length) ans.unshift([]);
    recPostorder(node.left, level + 1);
    recPostorder(node.right, level + 1);
    ans[ans.length - 1 - level].push(node.val);
  };
  recPostorder(root, 0);
  return ans;
};

// TESTS
[
  "#",
  "1,#,#",
  "1,2,#,#,3,#,#",
  "1,#,2,#,3,#,4,#,5,#,#",
  "3,9,#,#,20,15,#,#,7,#,#"
].forEach(t => {
  const tree = Tree.deserialize(t);
  console.log(
    "Bottom-up level order traversal of",
    t,
    "->",
    levelOrderBottomDFS(tree)
  );
});
