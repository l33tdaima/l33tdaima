/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *    this.val = val;
 *    this.left = this.right = null;
 * }
 */
const Tree = require('binary_tree');
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    var recIsBalanced= function(r) {
        if (r === null) {
            return { maxDepth: 0,
                     isBalanced: true };
        }
        let leftRes  = recIsBalanced(r.left);
        let rightRes = recIsBalanced(r.right);
        return {
            maxDepth: Math.max(leftRes.maxDepth, rightRes.maxDepth) + 1,
            isBalanced: leftRes.isBalanced && 
                        rightRes.isBalanced && 
                        Math.abs(leftRes.maxDepth - rightRes.maxDepth) <= 1
        };
    };
    return recIsBalanced(root).isBalanced;
};

var testData = "1,#,2,#,3,#,#";
var tree = Tree.deserialize(testData);
console.log("isBalanced? ->", isBalanced(tree));
testData = "1,2,#,#,3,#,#";
tree = Tree.deserialize(testData);
console.log("isBalanced? ->", isBalanced(tree));
