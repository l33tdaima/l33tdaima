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
    let dummy = new List.ListNode(0);
    let p = dummy;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }
    if (l1 !== null) {
        p.next = l1;
    } else {
        p.next = l2;
    }
    return dummy.next;
};
// TEST
[
    [[],[]],
    [[1],[2]],
    [[],[1]],
    [[1,1,1],[1,1,2]],
    [[1,3,9],[2,4,6,8,10]],
].forEach(function (test) {
    let l1 = List.fromArray(test[0]);
    let l2 = List.fromArray(test[1]);
    let lst = mergeTwoLists(l1, l2);
    console.log("Merge", test[0], "and", test[1],
                "->", List.toArray(lst));
});
