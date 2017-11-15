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
var isPalindrome = function(head) {
    var slow = head;
    var fast = head;
    var rev = null;
    while(fast && fast.next) {
        fast = fast.next.next;
        // reverse the slow iteration
        var temp = rev;
        rev = slow;
        slow = slow.next;
        rev.next = temp;
    }
    if(fast) {
        slow = slow.next;
    }
    while(rev && rev.val === slow.val) {
        slow = slow.next;
        rev = rev.next;
    }
    return !rev;
};

console.log("Test Case []: " + isPalindrome(List.fromArray([])));
console.log("Test Case [1,2,1]: " + isPalindrome(List.fromArray([1,2,1])));
console.log("Test Case [1,2,3,4]: " + isPalindrome(List.fromArray([1,2,3,4])));
console.log("Test Case [1,2,2,1]: " + isPalindrome(List.fromArray([1,2,2,1])));
