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
var removeNthFromEnd = function(head, n) {
    // Given n will always be valid

    // Create the dummy head to deal with the case
    // of remove the only node in the list
    let dummy = new List.ListNode(0);
    dummy.next = head;
    let fst = dummy, snd = dummy;
    // make a distance of n + 1
    for (let i = 1; i <= n + 1; ++i) {
        fst = fst.next;
    }
    // move first to the end
    while (fst !== null) {
        fst = fst.next;
        snd = snd.next;
    }
    // remove the node
    snd.next = snd.next.next;
    return dummy.next;
};
// TEST
[
    [[5], 1],
    [[1,2], 1],
    [[1,2], 2],
    [[1,2,3,4,5], 1],
    [[1,2,3,4,5], 2],
    [[1,2,3,4,5], 5],
].forEach(function(test) {
    let lstBefore = List.fromArray(test[0]);
    let lstAfter  = removeNthFromEnd(lstBefore, test[1]);
    console.log("------");
    console.log("Before ->", test[0]);
    console.log("After ->", List.toArray(lstAfter));
    console.log("------");
});
