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
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function(root) {
    if (root == null) { return null; }
    if (root.left === null) { return root; }
    let udParent = upsideDownBinaryTree(root.left);
    root.left.left = root.right;
    root.right = null;
    root.left.right = root;
    root.left = null;
    return udParent;
};
// TEST
[
   "#",
   "1,#,#",
   "1,2,#,#,#",
   "1,2,#,#,3,#,#",
   "1,2,4,#,#,5,#,#,3,#,#",
].forEach(function (test) {
    let tree = Tree.deserialize(test);
    let uree = upsideDownBinaryTree(tree);
    console.log("Upsidedown", test, "->", uree);
    console.log(" ", Tree.serialize(uree));
});
