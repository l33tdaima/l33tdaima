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
  const [s1, s2] = [new Array(), new Array()];
  while (l1) {
    s1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    s2.push(l2.val);
    l2 = l2.next;
  }
  let [dummy, carry] = [new List.ListNode(0), 0];
  while (s1.length > 0 || s2.length > 0) {
    let v1 = s1.length > 0 ? s1.pop() : 0;
    let v2 = s2.length > 0 ? s2.pop() : 0;
    let sum = v1 + v2 + carry;
    p = new List.ListNode(sum % 10);
    p.next = dummy.next;
    carry = ~~(sum / 10);
    dummy.next = p;
  }
  if (carry > 0) {
    let p = new List.ListNode(carry);
    p.next = dummy.next;
    dummy.next = p;
  }
  return dummy.next;
};
// TEST
[
  [[], [], []],
  [[1], [], [1]],
  [[3], [5], [8]],
  [[6], [9], [1, 5]],
  [
    [6, 5],
    [9, 0, 2],
    [9, 6, 7],
  ],
  [
    [6, 5],
    [9, 4, 9],
    [1, 0, 1, 4],
  ],
  [
    [7, 2, 4, 3],
    [5, 6, 4],
    [7, 8, 0, 7],
  ],
  [[9, 9, 9], [1], [1, 0, 0, 0]],
].forEach(([a1, a2, expected]) => {
  const actual = List.toArray(
    addTwoNumbers(List.fromArray(a1), List.fromArray(a2))
  );
  console.log(a1, '+', a2, '=', actual);
  console.assert(actual.toString() === expected.toString());
});
