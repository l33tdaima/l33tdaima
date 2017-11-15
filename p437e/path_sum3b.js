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
 * @return {number}
 */
var pathSumFrom = function(p, s) {
    if (p == null) { return 0; }
    return (p.val === s ? 1 : 0) +
           pathSumFrom(p.left, s - p.val) +
           pathSumFrom(p.right, s - p.val);
};
var pathSum = function(root, sum) {
    if (root == null) { return 0; }
    return pathSumFrom(root, sum) +
           pathSum(root.left, sum) +
           pathSum(root.right, sum);
};
// TESTS
[
    ["#", 0],
    ["1", 1],
    ["1,-2,1,-1,#,#,3,#,#,-3,-2,#,#,#", -1],
    ["10,5,3,3,#,#,-2,#,#,2,#,1,#,#,-3,#,11,#,#", 8]
].forEach(function (test) {
    let tree = Tree.deserialize(test[0]);
    console.log(test[0], "total num of path sum of", test[1],
                "->", pathSum(tree, test[1]));
    console.log("--------");
});
