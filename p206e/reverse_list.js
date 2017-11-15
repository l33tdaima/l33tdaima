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
var reverseList = function(head) {
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

console.log("Reversed List of [1,2,3]:" + 
            List.toArray(reverseList(List.fromArray([1,2,3]))).toString());
console.log("Reversed List of []:" + 
            List.toArray(reverseList(List.fromArray([]))).toString());
console.log("Reversed List of [1]:" + 
            List.toArray(reverseList(List.fromArray([1]))).toString());
