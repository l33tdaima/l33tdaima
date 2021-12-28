/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const LinkedList = require('list');
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let [slow, fast] = [head, head];
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
// TESTS
[
  [[1], 1],
  [[1, 2], 2],
  [[1, 2, 3], 2],
  [[1, 2, 3, 4, 5], 3],
  [[1, 2, 3, 4, 5, 6], 4],
].forEach(([array, expected]) => {
  const actual = middleNode(LinkedList.fromArray(array));
  console.log('Middle node of', array, '->', actual.val);
  console.assert(actual.val === expected);
});
