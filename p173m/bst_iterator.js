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
    var init = function (root, stack) {
        if (root === null) { return; }
        init(root.right, stack);
        stack.push(root.val);
        init(root.left, stack);
    };
    this.smallerValStack = new Array();
    init(root, this.smallerValStack);
};
/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return this.smallerValStack.length > 0;
};
/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    return this.smallerValStack.pop();
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
].forEach(function (test) {
    let tree = Tree.deserialize(test);
    console.log("\n---");
    console.log(tree);
    let i = new BSTIterator(tree);
    let a = [];
    while (i.hasNext()) a.push(i.next());
    console.log("BSTIterator ->", a);
});
