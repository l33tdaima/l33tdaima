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
    let nHead = null; // head of next level, to be set when iterating this level
    let nPrev = null; // holder of prev node when traversing next level
    while (pHead !== null) {
        let p = pHead;
        while (p !== null) { // iterate horizon within this level
            if (p.left !== null) {
                if (nPrev === null) {
                    nHead = p.left;
                } else {
                    nPrev.next = p.left;
                }
                nPrev = p.left;
            }
            if (p.right !== null) {
                if (nPrev === null) {
                    nHead = p.right;
                } else {
                    nPrev.next = p.right;
                }
                nPrev = p.right;
            }
            p = p.next;
        }
        pHead = nHead;
        nHead = null;
        nPrev = null;
    }
};
// TEST
[
    "#",
    "1,#,#",
    "1,2,4,#,#,5,#,#,3,#,7,#,#",
    "1,2,4,#,#,#,3,6,#,#,#",
    "1,2,#,4,#,#,3,#,7,#,#",
].forEach(t => {
    let tree = Tree.deserializeNoLink(t);
    connect(tree);
    console.log("Dump links of tree ->");
    console.log(" ", t);
    console.log(" ", Tree.serializeLink(tree));
});
