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
var hasCycle = function(head) {
    if (head === null || head.next === null) { return false; }
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            return true;
        }
    }
    return false;
};
// TEST
[
    [],
    [1],
    [1,2],
    [1,2,3],
    [1,2,3,4]
].forEach(function (test) {
    console.assert(! hasCycle(List.fromArray(test)));
});
let c1 = new List.ListNode(1);
c1.next = c1;
console.assert(hasCycle(c1));

let c21 = new List.ListNode(1);
let c22 = new List.ListNode(2);
c21.next = c22;
c22.next = c21;
console.assert(hasCycle(c21));

