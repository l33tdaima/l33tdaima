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
var pathSum = function(root, sum) {
    let numPath = 0;
    var recPathSumHelper = function(p, s) {
        if (p == null) {
            return;
        }
        if (p.val === s) {
            numPath ++;
        }
        recPathSumHelper(p.left, s - p.val);
        recPathSumHelper(p.right, s - p.val);
    };
    var recPathSum = function(rt) {
        if (rt == null) {
            return;
        }
        recPathSumHelper(rt, sum);
        recPathSum(rt.left);
        recPathSum(rt.right);
    };
    recPathSum(root);
    return numPath;
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
