/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */
const Tree = require('binary_tree_link');
/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (root == null) { return; }
    let pHead = root;
    while (pHead.left !== null) {
        let p = pHead;
        while (p !== null) {
            p.left.next = p.right;
            if (p.next !== null) p.right.next = p.next.left;
            p = p.next;
        }
        pHead = pHead.left; // move one level down
    }
};
// TEST
[
    "#",
    "1,#,#",
    "1,2,#,#,3,#,#",
    "1,2,4,#,#,5,#,#,3,6,#,#,7,#,#",
].forEach(t => {
    let tree = Tree.deserializeNoLink(t);
    connect(tree);
    console.log("Dump links of tree ->");
    console.log(" ", t);
    console.log(" ", Tree.serializeLink(tree));
});
