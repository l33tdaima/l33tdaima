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
var sortList = function(head) {
    var recQSort = function (hd) {
        if (hd === null || hd.next === null) {
            return { head: hd,
                     tail: hd };
        }
        let lhd = null, rhd = null;
        let p = hd.next; 
        hd.next = null;
        while (p !== null) {
            let curr = p;
            p = p.next;
            curr.next = null;
            if (curr.val <= hd.val) {
                curr.next = lhd;
                lhd = curr;
            } else {
                curr.next = rhd;
                rhd = curr; 
            }
        }
        // console.log("\n---\nHead", hd, "Left:", List.toArray(lhd), "Right:", List.toArray(rhd));
        let lSorted = recQSort(lhd);
        let rSorted = recQSort(rhd);
        hd.next = rSorted.head;
        if (lSorted.tail !== null) {
            lSorted.tail.next = hd;
        }
        return { head: (lSorted.head !== null) ? lSorted.head : hd,
                 tail: (rSorted.tail !== null) ? rSorted.tail : hd };
    };
    return recQSort(head).head;
};
//TEST
[
    [],
    [1],
    [2,1],
    [1,2],
    [3,2,1],
    [1,1,1,1],
    [1,2,3,4],
    [3,2,4,5],
    [2,1,5,6,9,7,8,5,3,4],
].forEach(function(test) {
    let lst = List.fromArray(test);
    console.log("Sorted list->", List.toArray(sortList(lst)));
});
