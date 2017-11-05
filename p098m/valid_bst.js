const tm = require('../p297h/serialize_binary_tree');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
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

var testCases = [
    "0,#,#",
    "1,#,#",
    "1,2,#,#,#",
    "2,#,1,#,#",
    "2,1,#,#,#",
    "1,2,#,#,3,#,#",
    "2,1,#,#,3,#,#"
];
testCases.forEach(function(test) {
    let t = tm.deserialize(test);
    console.log(test, "is a valid BST? ->", isValidBST(t));
}, this);
