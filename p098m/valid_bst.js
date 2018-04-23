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
var isValidBSTV1 = function(root) {
    // A tree is BST if 
    // 1. its left is a BST and root is greater than any of left
    // 2. its right is a BST and root is less than any of the right
    var recIsBSTHelper = function(root, minVal, maxVal) {
        if (root === null) { return true; }
        if (root.val <= minVal || root.val >= maxVal) { return false; }
        return recIsBSTHelper(root.left, minVal, root.val) &&
               recIsBSTHelper(root.right, root.val, maxVal);
    };
    return recIsBSTHelper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER); 
};
// The above solution relies on INT_MIN and INT_MAX which apparently doesn't scale to long, double etc.
// This version traverses the tree in-order, checking if they form increasing order
var isValidBSTV2 = function(root) {
    let prev = null; // closure of the prev node, 
                     // which must be less than the current node
    let recValidate = function(node) {
        if (node == null) { return true; }
        if (!recValidate(node.left)) { return false; }
        if (prev != null && prev.val != null && prev.val > node.val) {
            return false;
        }
        prev = node;
        return recValidate(node.right);
    };
    return recValidate(root);
};
// TEST
testCases = [
    "0,#,#",
    "1,#,#",
    "1,2,#,#,#",
    "2,#,1,#,#",
    "2,1,#,#,#",
    "1,2,#,#,3,#,#",
    "2,1,#,#,3,#,#"
].forEach(t => {
    let tree = Tree.deserialize(t);
    console.log("Is", t, "a valid BST? ->", 
                isValidBSTV1(tree), "&&", isValidBSTV2(tree));
}, this);
