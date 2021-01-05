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
var mergeTwoLists = function (l1, l2) {
  let sentinel = new List.ListNode(0);
  let p = sentinel;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }
    p = p.next;
  }
  p.next = l1 ? l1 : l2;
  return sentinel.next;
};
// TEST
[
  [[], [], []],
  [[1], [2], [1, 2]],
  [[], [0], [0]],
  [
    [1, 1, 1],
    [1, 1, 2],
    [1, 1, 1, 1, 1, 2],
  ],
  [
    [1, 2, 4],
    [1, 3, 4],
    [1, 1, 2, 3, 4, 4],
  ],
  [
    [1, 3, 9],
    [2, 4, 6, 8, 10],
    [1, 2, 3, 4, 6, 8, 9, 10],
  ],
].forEach(([l1, l2, expected]) => {
  const actual = List.toArray(
    mergeTwoLists(List.fromArray(l1), List.fromArray(l2))
  );
  console.log('Merge', l1, 'and', l2, '->', actual);
  console.assert(actual.toString() === expected.toString());
});
