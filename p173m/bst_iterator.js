/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const Tree = require('binary_tree');
/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
    this.pushLeft = function (p, stack) {
        while (p !== null) {
            stack.push(p);
            p = p.left;
        }
    };
    this.stack = new Array();
    this.pushLeft(root, this.stack);
};
/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};
/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    let top = this.stack.pop();
    this.pushLeft(top.right, this.stack);
    return top.val;
};
/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
// TEST
[
    "",
    "1",
    "2,1,#,#,3,#,#",
    "5,3,2,1,#,#,#,4,#,#,7,6,#,#,8,#,9,#,#",
].forEach(t => {
    let tree = Tree.deserialize(t);
    let i = new BSTIterator(tree);
    let a = [];
    while (i.hasNext()) a.push(i.next());
    console.log("BSTIterator for", t, "->", a);
});
