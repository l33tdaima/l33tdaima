/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
const Tree = require('binary_tree');
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (root == null) return root;
  dummy = new Tree.TreeNode(-1);
  prev = dummy;

  const inorder = (node) => {
    if (node == null) return;
    inorder(node.left);
    [prev.right, node.left] = [node, prev];
    prev = node;
    inorder(node.right);
  };

  inorder(root);
  [dummy.right.left, prev.right] = [prev, dummy.right];
  return dummy.right;
};

// TEST
[
  ['#', []],
  ['1,#,#', [1]],
  ['2,1,#,#,3,#,#', [1, 2, 3]],
  ['4,2,1,#,#,3,#,#,5,#,#', [1, 2, 3, 4, 5]],
  ['4,2,1,#,#,3,#,#,5,#,6,#,7,#,8,#,#', [1, 2, 3, 4, 5, 6, 7, 8]],
].forEach(([tree, expected]) => {
  const head = treeToDoublyList(Tree.deserialize(tree));
  let [actual, p] = [[], head];
  while (p && p.right != head) {
    actual.push(p.val);
    p = p.right;
  }
  if (p) actual.push(p.val);
  console.log('Convert tree', tree, 'to doubly linked list ->', actual);
  console.assert(actual.toString() === expected.toString());
});
