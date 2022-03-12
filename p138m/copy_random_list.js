/**
 * // Definition for a Node.
 */
function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (head == null) return null;
  // Round 1: copy the node and insert it right behind
  let it = head;
  while (it) {
    let cp = new Node(it.val, it.next, null);
    it.next = cp;
    it = cp.next;
  }
  // Round 2: copy the random link
  it = head;
  while (it) {
    if (it.random !== null) it.next.random = it.random.next;
    it = it.next.next;
  }
  // Round 3: detach the copy
  it = head;
  let sentinel = new Node(0, null, null);
  let p = sentinel;
  while (it) {
    let next = it.next.next;
    // extract the copy
    let copy = it.next;
    p.next = copy;
    p = copy;
    // restore the original
    it.next = next;
    it = next;
  }
  return sentinel.next;
};
// TEST
let dummyHead = new Node(0, null, null);
let hashTable = {};
let p = dummyHead;
let test = ['a', 'b', 'c', 'd', 'e'];
test.forEach(function (label) {
  let node = new Node(label, null, null);
  hashTable[label] = node;
  p.next = node;
  p = p.next;
});
p = dummyHead.next;
while (p !== null) {
  let label = test[~~(Math.random() * test.length)];
  p.random = hashTable[label];
  console.log('node:', p.val + ', p.random =', label, '->');
  p = p.next;
}
console.log('Deep copy random list');
let copy = copyRandomList(dummyHead.next);
let pc = copy;
while (pc !== null) {
  console.log('node:', pc.val + ', pc.random =', pc.random.val, '->');
  pc = pc.next;
}
