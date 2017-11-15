/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const Tree = require('binary_tree');
/**
 * This is a in-place inversion
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) {
        return null;
    }
    let left = invertTree(root.left);
    let right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};

var testData = [
    "#",
    "1",
    "1,2,#,#,#",
    "1,#,2,#,#",
    "1,2,#,#,3,#,#",
    "1,2,3,#,#,#,#",
    "1,#,2,#,3,#,#",
    "1,2,3,4,#,#,#,#,#",
    "1,#,2,#,3,#,4,#,#",
    "1,#,2,3,4,#,#,#,#",
    "1,#,2,3,#,#,4,#,#",
    "4,2,1,#,#,3,#,#,7,6,#,#,9,#,#"
];

testData.forEach(function(test) {
    let tree = Tree.deserialize(test);
    console.log("Invert", test, "->", Tree.serialize(invertTree(tree)));
});
