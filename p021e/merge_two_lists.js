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
var mergeTwoLists = function(l1, l2) {
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
  [[], []],
  [[1], [2]],
  [[], [1]],
  [[1, 1, 1], [1, 1, 2]],
  [[1, 2, 4], [1, 3, 4]],
  [[1, 3, 9], [2, 4, 6, 8, 10]]
].forEach(t => {
  let l1 = List.fromArray(t[0]);
  let l2 = List.fromArray(t[1]);
  let lst = mergeTwoLists(l1, l2);
  console.log('Merge', t[0], 'and', t[1], '->', List.toArray(lst));
});
