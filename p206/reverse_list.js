/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function makeList(array) {
    if(array.length === 0) {
        return null;
    }
    var node = new ListNode(array.shift());
    node.next = makeList(array);
    return node;
}

function toArray(head) {
    var ret = new Array();
    while(head !== null) {
        ret.push(head.val);
        head = head.next;
    }
    return ret;
}
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
            toArray(reverseList(makeList([1,2,3]))).toString());
console.log("Reversed List of []:" + 
            toArray(reverseList(makeList([]))).toString());
console.log("Reversed List of [1]:" + 
            toArray(reverseList(makeList([1]))).toString());
