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
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    /**
     * @param {TreeNode} root
     * @return {number} pathSum
     */
    var recMaxPathSumHelper = function(root) {
        if (root === null || root === undefined) {
            return 0;
        }
        let lt = Math.max(0, recMaxPathSumHelper(root.left));
        let rt = Math.max(0, recMaxPathSumHelper(root.right));
        maxSum = Math.max(maxSum, lt + rt + root.val);
        return root.val + Math.max(lt, rt);
    };

    recMaxPathSumHelper(root);
    return maxSum;
};

var testData = [
    "",
    "1",
    "1,2,#,#,#",
    "1,#,2,#,#",
    "1,2,#,#,3,#,#",
];
testData.forEach(function(test) {
    let tree = Tree.deserialize(test);
    console.log("Max path sum ->", maxPathSum(tree));
});
