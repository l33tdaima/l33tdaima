/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const List = require('list');
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var merge2Lists = function (lst1, lst2) {
  if (!lst1) return lst2;
  if (!lst2) return lst1;
  const hd = new List.ListNode(0);
  let p = hd;
  while (lst1 && lst2) {
    if (lst1.val < lst2.val) {
      p.next = lst1;
      lst1 = lst1.next;
    } else {
      p.next = lst2;
      lst2 = lst2.next;
    }
    p = p.next;
  }
  p.next = lst1 ? lst1 : lst2;
  return hd.next;
};

var mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];
  let mid = ~~(lists.length / 2);
  let left = mergeKLists(lists.slice(0, mid));
  let right = mergeKLists(lists.slice(mid));
  return merge2Lists(left, right);
};

[
  [
    [
      [1, 4, 5],
      [1, 3, 4],
      [2, 6],
    ],
    [1, 1, 2, 3, 4, 4, 5, 6],
  ],
  [[], []],
  [[[]], []],
].forEach(([tests, expected]) => {
  const lists = tests.map(List.fromArray);
  const actual = List.toArray(mergeKLists(lists));
  console.log('Merged K Sorted Lists', tests, '->', actual);
  console.assert(actual.toString() === expected.toString());
});
