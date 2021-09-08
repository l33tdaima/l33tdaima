/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const List = require('list');
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseListIter = function (head) {
  let prev = null;
  while (head) {
    let nxt = head.next;
    head.next = prev;
    [prev, head] = [head, nxt];
  }
  return prev;
};
var reverseList = function (head) {
  if (head == null || head.next == null) return head;
  const h2 = head.next;
  const ret = reverseList(h2);
  [h2.next, head.next] = [head, null];
  return ret;
};
// TEST
[
  [
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
  ],
  [
    [1, 2],
    [2, 1],
  ],
  [[], []],
].forEach(([array, expected]) => {
  let actual1 = List.toArray(reverseListIter(List.fromArray(array)));
  let actual2 = List.toArray(reverseList(List.fromArray(array)));
  console.log('Reverse linked list', array, '->', actual2);
  console.assert(actual1.toString() === expected.toString());
  console.assert(actual2.toString() === expected.toString());
});
