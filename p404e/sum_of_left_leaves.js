/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const Tree = require("binary_tree");
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let recHelper = function(rt, isLeft) {
        if (rt == null) { return 0; }
        if (rt.left == null && rt.right == null) {
            return isLeft ? rt.val : 0;
        } else {
            return recHelper(rt.left, true)
                 + recHelper(rt.right, false);
        }
    };
    if (root == null) { return 0; }
    return recHelper(root.left, true)
         + recHelper(root.right, false);
};
// TEST
[
    "",
    "1,#,#",
    "1,2,#,#,#",
    "1,#,3,#,#",
    "3,9,#,#,20,15,#,#,7,#,#",
].forEach(t => {
    let tree = Tree.deserialize(t);
    console.log("Sum of left leaves of", t, "->",
                sumOfLeftLeaves(tree));
});
