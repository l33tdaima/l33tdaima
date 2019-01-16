/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const List = require("list");
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let p = head;
  while (p && p.next) {
    if (p.val === p.next.val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return head;
};
// TESTS
[
  [],
  [1, 2, 3],
  [1, 1, 2],
  [1, 1, 2, 3, 3],
  [1, 1, 1, 2, 3, 3],
  [4, 4, 4, 4, 4, 4, 4]
].forEach(t => {
  let head = List.fromArray(t);
  head = deleteDuplicates(head);
  console.log("Delete duplicates from", t, "->", List.toArray(head));
});
