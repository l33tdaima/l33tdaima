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
var addTwoNumbers = function(l1, l2) {
    if (l1 === null && l2 === null) {
        return null;
    }
    let head = new List.ListNode(0);
    let p = head;
    let carry = 0;
    while (l1 !== null || l2 !== null) {
        let s = (l1?l1.val:0) + (l2?l2.val:0) + carry;
        carry = ~~(s/10); // integer quotient
        p.next = new List.ListNode(s%10);
        p = p.next;
        if (l1 !== null) { l1 = l1.next; }
        if (l2 !== null) { l2 = l2.next; }
    }
    if (carry > 0) {
        p.next = new List.ListNode(carry);
    }
    return head.next;
};
// TEST
[
    [[],[]],
    [[1],[]],
    [[3],[5]],
    [[6],[9]],
    [[6,5],[9,0,2]],
    [[6,5],[8,4,9]],
    [[2,4,3],[5,6,4]],
].forEach(function(test) {
    let l0 = List.fromArray(test[0]);
    let l1 = List.fromArray(test[1]);
    console.log(test[0].toString(), "+", test[1].toString(),
                "=", List.toArray(addTwoNumbers(l0, l1)).toString());
});
