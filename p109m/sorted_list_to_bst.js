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
const List = require('list');
const Tree = require('binary_tree');

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (head == null) return head;
  if (head.next == null) return new Tree.TreeNode(head.val);

  let [prev, slow, fast] = [null, head, head];
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;

  let root = new Tree.TreeNode(slow.val);
  root.left = sortedListToBST(head);
  root.right = sortedListToBST(slow.next);
  return root;
};
// TESTS
const f = (x, y) => [x, y];
[
  f([-10, -3, 0, 5, 9], '0,-3,-10,#,#,#,9,5,#,#,#'),
  f([], '#'),
  f([0], '0,#,#'),
  f([1, 3], '3,1,#,#,#'),
  f([1, 2, 3, 4], '3,2,1,#,#,#,4,#,#'),
].forEach(([array, expected]) => {
  let actual = Tree.serialize(sortedListToBST(List.fromArray(array)));
  console.log('Convert sorted list', array, 'to BST ->', actual);
  console.assert(actual === expected);
});
