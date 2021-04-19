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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // Create the dummy head to deal with the case of remove the only node in the list
  let dummy = new List.ListNode(0);
  dummy.next = head;
  let [fst, snd] = [dummy, dummy];
  for (let i = 1; i <= n + 1; ++i) fst = fst.next;
  while (fst) {
    [fst, snd] = [fst.next, snd.next];
  }
  snd.next = snd.next.next;
  return dummy.next;
};
// TESTS
[
  [[5], 1, []],
  [[1, 2], 1, [1]],
  [[1, 2], 2, [2]],
  [[1, 2, 3, 4, 5], 1, [1, 2, 3, 4]],
  [[1, 2, 3, 4, 5], 2, [1, 2, 3, 5]],
  [[1, 2, 3, 4, 5], 5, [2, 3, 4, 5]],
].forEach(([array, n, expected]) => {
  let actual = List.toArray(removeNthFromEnd(List.fromArray(array), n));
  console.log(`Remove ${n}th node from end of ${array} -> ${actual}`);
  console.assert(actual.toString() === expected.toString());
});
