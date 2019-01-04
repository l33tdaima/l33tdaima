/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const List = require("list");
const Tree = require("binary_tree");
const splitList = function(head) {
  let [prev, slow, fast] = [head, head, head];
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;
  return slow;
};
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  if (head == null) return head;
  if (head.next == null) return new Tree.TreeNode(head.val);
  let midNode = splitList(head);
  let root = new Tree.TreeNode(midNode.val);
  root.left = sortedListToBST(head);
  root.right = sortedListToBST(midNode.next);
  return root;
};
// TESTS
[
  [],
  [1],
  [1, 2],
  [1, 2, 3],
  [1, 2, 3, 4],
  [-10, -3, 0, 5, 9],
  [-10, -8, -5, -3, 0, 2, 5, 8, 9]
].forEach(t => {
  let head = List.fromArray(t);
  let tree = sortedListToBST(head);
  console.log("Convert sorted list", t, "to BST ->", Tree.serialize(tree));
});
