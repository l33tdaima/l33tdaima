/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const List = require('list');
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = new List.ListNode(0); // dummy head
  let p = head;
  let carry = 0;
  while (carry > 0 || l1 !== null || l2 !== null) {
    let s = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = ~~(s / 10); // integer quotient
    p.next = new List.ListNode(s % 10);
    p = p.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
  return head.next;
};
// TEST
[
  [
    [2, 4, 3],
    [5, 6, 4],
    [7, 0, 8],
  ],
  [[0], [0], [0]],
  [
    [9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9],
    [8, 9, 9, 9, 0, 0, 0, 1],
  ],
  [[1], [], [1]],
  [[3], [5], [8]],
  [[6], [9], [5, 1]],
  [
    [6, 5],
    [9, 0, 2],
    [5, 6, 2],
  ],
  [
    [6, 5],
    [8, 4, 9],
    [4, 0, 0, 1],
  ],
].forEach(([a1, a2, expected]) => {
  const actual = List.toArray(
    addTwoNumbers(List.fromArray(a1), List.fromArray(a2))
  );
  console.log(a1, '+', a2, '->', actual);
  console.assert(actual.toString() === expected.toString());
});
