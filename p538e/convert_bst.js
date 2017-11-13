/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const tm = require('../p297h/serialize_binary_tree');
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    // return the sum of greater keys
    var recFold = function(p, s) {
        if (p == null) {
            return s;
        }
        p.val += recFold(p.right, s);
        return recFold(p.left, p.val);
    };
    recFold(root, 0);
    return root;
};
// TEST
[
    "#",
    "5,2,#,#,13,#,#"
].forEach(function (test) {
    let tree = tm.deserialize(test);
    console.log(test, "->", tm.serialize(convertBST(tree)));
});