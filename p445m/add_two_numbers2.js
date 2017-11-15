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
    let s1 = new Array(), s2 = new Array();
    while (l1 !== null) {
        s1.push(l1.val);
        l1 = l1.next;
    }
    while (l2 !== null) {
        s2.push(l2.val);
        l2 = l2.next;
    }
    let head = null;
    let carry = 0;
    while (s1.length > 0 || s2.length > 0) {
        let v1 = (s1.length > 0) ? s1.pop() : 0;
        let v2 = (s2.length > 0) ? s2.pop() : 0;
        let sum = v1 + v2 + carry; 
        let p = new List.ListNode(sum % 10);
        carry = Math.floor(sum / 10);
        p.next = head;
        head = p;
    }
    if (carry > 0) {
        let p = new List.ListNode(carry);
        p.next = head;
        head = p;
    }
    return head;
};
// TEST
[
    [[],[]],
    [[1],[]],
    [[3],[5]],
    [[6],[9]],
    [[6,5],[9,0,2]],
    [[6,5],[9,4,9]],
    [[7,2,4,3],[5,6,4]],
    [[9,9,9],[1]]

].forEach(function(test) {
    let l0 = List.fromArray(test[0]);
    let l1 = List.fromArray(test[1]);
    console.log(test[0].toString(), "+", test[1].toString(),
                "=", List.toArray(addTwoNumbers(l0, l1)).toString());
});
