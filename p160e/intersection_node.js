/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const List = require('list');
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    let pa  = headA, pb = headB;
    while (pa !== pb) {
        pa = (pa !== null) ? pa.next : headB;
        pb = (pb !== null) ? pb.next : headA;
    }
    return pa;
};
// TEST
let a1 = new List.ListNode(1);
a1.next = new List.ListNode(3);
let pa = a1.next;
let b1 = new List.ListNode(2);
b1.next = new List.ListNode(4);
let pb = b1.next;
pb.next = new List.ListNode(6);
let c1 = new List.ListNode(7);
pa.next = c1;
pb.next = c1;
c1.next = new List.ListNode(8);
c1.next.next = new List.ListNode(9);
console.log("List A ->", List.toArray(a1));
console.log("List B ->", List.toArray(b1));
console.log("Intersection Node ->", getIntersectionNode(a1, b1));
