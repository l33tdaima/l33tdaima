/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */
const Tree = require('binary_tree');
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) { return 0; }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

var testData = "1,2,#,#,3,4,#,5,#,#";
var tree = Tree.deserialize(testData);
console.log("Max depth ->", maxDepth(tree));
