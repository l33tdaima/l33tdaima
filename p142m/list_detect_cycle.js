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
var detectCycle = function(head) {
    let slow = head, fast = head, entry = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) { // when cycle is found
            while (slow !== entry) {
                slow = slow.next;
                entry = entry.next;
            }
            return entry;
        }
    }
    return null;
};
// TEST
[
    [],
    [1],
    [1,2],
    [1,2,3],
    [1,2,3,4]
].forEach(function (test) {
    console.assert(null === detectCycle(List.fromArray(test)));
});
let c1 = new List.ListNode(1);
c1.next = c1;
console.log("Entry of cycle ->", detectCycle(c1));

let c21 = new List.ListNode(1);
let c22 = new List.ListNode(2);
c21.next = c22;
c22.next = c21;
console.log("Entry of cycle ->", detectCycle(c21));

let c31 = new List.ListNode(1);
let c32 = new List.ListNode(2);
c31.next = c32;
let c33 = new List.ListNode(3);
c32.next = c33;
c33.next = c32;
console.log("Entry of cycle ->", detectCycle(c31));
