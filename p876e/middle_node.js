/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const LinkedList = require("list");
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
// TESTS
[[1], [1, 2], [1, 2, 3], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]].forEach(t => {
  let list = LinkedList.fromArray(t);
  console.log("Middle node of", t, "->", middleNode(list).val);
});
