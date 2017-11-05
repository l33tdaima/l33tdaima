const tm = require('../p297h/serialize_binary_tree');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
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
    let tree = tm.deserialize(test);
    console.log("Invert", test, "->", tm.serialize(invertTree(tree)));
});
