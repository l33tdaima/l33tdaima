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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let [slow, fast, rev] = [head, head, null];
  while (fast && fast.next) {
    fast = fast.next.next;
    // reverse the slow iteration
    let temp = rev;
    rev = slow;
    slow = slow.next;
    rev.next = temp;
  }
  if (fast) slow = slow.next;
  while (rev && rev.val === slow.val) {
    slow = slow.next;
    rev = rev.next;
  }
  return !rev;
};

// TESTS
[
  [[], true],
  [[1, 2, 2, 1], true],
  [[1, 2], false],
  [[1, 2, 1], true],
].forEach(([array, expected]) => {
  const actual = isPalindrome(List.fromArray(array));
  console.log('List', array, 'is palindrome? ->', actual);
  console.assert(actual === expected);
});
