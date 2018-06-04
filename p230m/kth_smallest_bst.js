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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if (root == null) {
        console.assert("Invalid input");
    }
    let count = 0;
    const recInOrder = function(root) {
        if (root.left !== null) {
            let ret = recInOrder(root.left);
            if (ret !== null) { return ret; }
        }
        if (++count === k) {
            return root.val;
        }
        if (root.right !== null) {
            let ret = recInOrder(root.right);
            if (ret !== null) { return ret; }
        }
        return null;
    }
    return recInOrder(root);
};
// TEST
[
    ["1,#,#", 1],
    ["2,1,#,#,3,#,#", 2],
    ["2,1,#,#,3,#,#", 3],
    ["5,3,2,#,#,4,#,#,6,#,7,#,#", 1],
    ["5,3,2,#,#,4,#,#,6,#,7,#,#", 2],
    ["5,3,2,#,#,4,#,#,6,#,7,#,#", 3],
    ["5,3,2,#,#,4,#,#,6,#,7,#,#", 4],
    ["5,3,2,#,#,4,#,#,6,#,7,#,#", 5],
    ["5,3,2,#,#,4,#,#,6,#,7,#,#", 6],
].forEach(t => {
    let tree = Tree.deserialize(t[0]);
    console.log("The", t[1] + "-th smallest value in BST", t[0], "->",
                kthSmallest(tree, t[1]));
});