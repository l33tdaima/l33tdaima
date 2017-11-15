/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const List = require('list');
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var merge2Lists = function(lst1, lst2) {
    if (!lst1) {
        return lst2;
    }
    if (!lst2) {
        return lst1;
    }
    var hd = new List.ListNode(0);
    var p = hd;
    while (lst1 && lst2) {
        if(lst1.val < lst2.val) {
            p.next = lst1;
            lst1 = lst1.next;
        }
        else {
            p.next = lst2;
            lst2 = lst2.next;
        }
        p = p.next;
    }
    p.next = (lst1)?lst1:lst2;
    return hd.next;
};

var mergeKLists = function(lists) {
    if (lists.length === 0) {
        return lists;
    }
    if (lists.length === 1) {
        return lists[0];
    }
    let mid = Math.floor(lists.length/2);
    // console.log("k:", lists.length, ", mid:", mid);
    let left = mergeKLists(lists.slice(0, mid));
    let right = mergeKLists(lists.slice(mid));
    return merge2Lists(left, right);
};

var testArray = [
    [1, 3, 5],
    [2, 4, 6],
    [0, 6, 9, 10],
    [8, 8, 8]
];

var testLists = [];
testArray.forEach(function(elem) {
    testLists.push(List.fromArray(elem));
}, this);
var merged = mergeKLists(testLists);
console.log("Merged K Sorted Lists:", List.toArray(merged));
