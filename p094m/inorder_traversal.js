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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = new Array();
    let stack = new Array();
    if (root === null) {
        return result;
    }
    let p = root;
    stack.push(p);
    while (stack.length > 0) {
        if (p.left !== null) {
            p = p.left;
            stack.push(p);
            continue;
        }
        do {
            p = stack.pop();
            result.push(p.val);
        } while (p.right === null && stack.length > 0);
        if (p.right !== null) {
            p = p.right;
            stack.push(p);
        }
    }
    return result;
};

var testData = [
    "1",
    "1,2,#,#,3,#,#",
    "1,2,3,4,#,#,#,#,#",
    "1,#,2,#,3,#,4,#,#",
    "1,#,2,3,4,#,#,#,#",
    "1,2,4,#,#,5,#,7,#,#,3,6,#,8,#,#,#"
];
testData.forEach(function(data) {
    let tree = Tree.deserialize(data);
    console.log("In-order traversal ->", inorderTraversal(tree));
});
