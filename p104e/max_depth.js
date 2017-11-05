const tm = require('../p297h/serialize_binary_tree');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) { return 0; }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

var testData = "1,2,#,#,3,4,#,5,#,#";
var tree = tm.deserialize(testData);
console.log("Max depth ->", maxDepth(tree));
