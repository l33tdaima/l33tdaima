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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    // Use .right method of tree as .next method of the linklist
    // @param {TreeNode} current node
    // @return {TreeNode} the tail after flattened the child
    var recFlatten = function(p) {
        // return null if recursion from left from parent, but the leaf if recursion from right of parent
        if (p === null || (p.left === null && p.right === null)) {
            return p;
        }
        let next = p.right;
        let ltail = recFlatten(p.left);
        // insert left child between parent and right child if there is any
        if (ltail !== null) {
            p.right = p.left;
            ltail.right = next;
            p.left = null;
        }
        // keep flattening right if there is any right child
        if (next !== null) {
            return recFlatten(next);
        }
        else {
            return ltail;
        }
    };
    recFlatten(root);
};

var testData = [
    "",
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
    "1,2,4,#,#,5,#,7,#,#,3,6,#,8,#,#,#",
    "3,9,#,#,20,15,#,#,7,#,#"
];
testData.forEach(function(test) {
    let tree = tm.deserialize(test);
    flatten(tree);
    console.log("After flatten ->", tm.serialize(tree));
});
