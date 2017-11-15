/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const Tree = require('binary_tree');
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    var isMirror = function(left, right) {
        if (left === null && right === null) { return true; }
        if (left === null || right === null) { return false; }
        return (left.val === right.val) &&
               isMirror(left.left, right.right) &&
               isMirror(left.right, right.left);
    };
    return (root === null) || isMirror(root.left, root.right);
};

var root = new Tree.TreeNode(1);
root.left = new Tree.TreeNode(2);
root.left.left = new Tree.TreeNode(3);
root.left.right = new Tree.TreeNode(4);
root.right = new Tree.TreeNode(2);
root.right.left = new Tree.TreeNode(4);
root.right.right = new Tree.TreeNode(3);
console.log("isSymmetric? ->", isSymmetric(root));
