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
var reverseListIterative = function(head) {
    if(head === null) {
        return head;
    }
    var rev = null;
    while(head) {
        var temp = rev;
        rev = head;
        head = head.next;
        rev.next = temp;
    }
    return rev;
};
var reverseListRecursive = function(head) {
    let recRev = function(hd, rev) {
        if (hd == null) {
            return rev;
        } else {
            let next = hd.next;
            hd.next = rev;
            rev = hd;
            return recRev(next, rev);
        }
    };
    return recRev(head, null);
};
let reverseList = reverseListRecursive;
// TEST
[
    [],
    [1],
    [1,2,3],
    [1,2,3,4,5,6,7,8,9],
].forEach(t => {
    let hd = List.fromArray(t);
    console.log("Reversed List of ", t, "->",
                List.toArray(reverseList(hd)));
});
