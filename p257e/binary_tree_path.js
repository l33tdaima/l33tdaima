/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
let Tree = require('binary_tree');
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = [];
    // recursive helper with closure of res;
    let recPathHelper = function(root, s) {
        if (root == null) { return; }
        s += root.val;
        if (root.left == null && root.right == null) {
            res.push(s);
            return;
        }
        if (root.left !== null) {
            recPathHelper(root.left, s + "->");
        }
        if (root.right !== null) {
            recPathHelper(root.right, s + "->");
        }
    };
    recPathHelper(root, "");
    return res;
};
// TEST
[
    "",
    "#",
    "1,#,#",
    "1,2,#,5,#,#,3,#,#",
    "1,2,3,#,#,5,#,#,4,#,6,#,#",
].forEach(t => {
    let tree = Tree.deserialize(t);
    console.log("Tree paths of", t, "->",
                binaryTreePaths(tree));
});
