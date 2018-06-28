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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    if (root == null) { throw "Invalid Tree"; }
    let rootVal = root.val;
    let child = (target < rootVal) ? root.left : root.right;
    if (child == null) { return rootVal; }
    let childVal = closestValue(child, target);
    return Math.abs(target - rootVal) < Math.abs(target - childVal) ?
           rootVal : childVal;
};
// TEST
[
    ["4,2,1,#,#,3,#,#,5,#,#", 3.714286],
].forEach(t => {
    let tree = Tree.deserialize(t[0]);
    console.log("Closet value to", t[1], "in", t[0],
                "->", closestValue(tree, t[1]));
});