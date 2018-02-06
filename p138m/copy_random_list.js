/**
 * Definition for singly-linked list with a random pointer.
 */
function RandomListNode(label) {
    this.label = label;
    this.next = this.random = null;
}

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    if (head == null) { return head; }
    // Round 1: copy the node and insert it right behind
    let it = head;
    while (it !== null) {
        let next = it.next;
        let cp = new RandomListNode(it.label);
        it.next = cp;
        cp.next = next;
        it = next;
    }
    // Round 2: copy the random link
    it = head;
    while (it !== null) {
        if (it.random !== null) {
            it.next.random = it.random.next;
        }
        it = it.next.next;
    }
    // Round 2: detach the copy
    it = head;
    let dummyHeadCopy = new RandomListNode(0);
    let p = dummyHeadCopy;
    while (it !== null) {
        let next = it.next.next;
        // extract the copy
        let copy = it.next;
        p.next = copy;
        p = copy;
        // restore the original
        it.next = next;
        it = next;
    }
    return dummyHeadCopy.next;
};
// TEST
let dummyHead = new RandomListNode(null);
let hashTable = {};
let p = dummyHead;
let test = ['a', 'b', 'c', 'd', 'e'];
test.forEach(function (label) {
    let node = new RandomListNode(label);
    hashTable[label] = node;
    p.next = node;
    p = p.next;
});
p = dummyHead.next;
while (p !== null) {
    let label = test[~~(Math.random() * (~~test.length))];
    p.random = hashTable[label];
    console.log("node:", p.label + ", p.random =", label, "->");
    p = p.next;
}
console.log("Deep copy random list");
let copy = copyRandomList(dummyHead.next);
let pc = copy;
while (pc !== null) {
    console.log("node:", pc.label + ", pc.random =", pc.random.label, "->");
    pc = pc.next;
}
