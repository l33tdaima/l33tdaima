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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (root == null) {
        return false;
    }
    if (root.left === null && root.right === null && root.val === sum) {
        return true;
    }
    return hasPathSum(root.left, sum - root.val) ||
           hasPathSum(root.right, sum - root.val);
};

[
    ["", 4],
    ["1", 1],
    ["1", 2],
    ["1,2,3,#,#,#,#", 6],
    ["1,2,3,#,#,#,#", 7],
    ["5,4,11,7,#,#,2,#,#,#,8,13,#,#,4,#,1,#,#", 22],
    ["5,4,11,7,#,#,2,#,#,#,8,13,#,#,4,#,1,#,#", 23]
].forEach(function (test) {
    let tree = Tree.deserialize(test[0]);
    console.log(test[0], "has pash sum", test[1],
                "->", hasPathSum(tree, test[1]));
});
