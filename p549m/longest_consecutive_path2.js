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
var longestConsecutive = function(root) {
    let maxLen = 0;
    /**
     * Recursive helper
     * @param {TreeNode} node
     * @return the longest len of increasing and decreasing path
     */
    const recLCSLen = (node) => {
        if (node == null) return [0, 0];
        let inc = 1; // longest incr path from leave to root
        let dcr = 1; // longest decr path from leave to root
        if (node.left !== null) {
            let leftTuple = recLCSLen(node.left);
            if (node.left.val === node.val - 1) {
                inc = leftTuple[0] + 1;
            } else if (node.left.val === node.val + 1) {
                dcr = leftTuple[1] + 1;
            }
        }
        if (node.right !== null) {
            let rightTuple = recLCSLen(node.right);
            if (node.right.val === node.val - 1) {
                inc = Math.max(inc, rightTuple[0] + 1); // pick left or right
            } else if (node.right.val === node.val + 1) {
                dcr = Math.max(dcr, rightTuple[1] + 1); // pick left or right
            }
        }
        maxLen = Math.max(maxLen, inc + dcr - 1); // pass root or not
        return [inc, dcr];
    };
    recLCSLen(root);
    return maxLen;
};
// TESTS
[
    ["#", 0],
    ["1,#,#", 1],
    ["1,2,#,#,#", 2],
    ["1,#,3,#,#", 1],
    ["1,2,#,#,3,#,#", 2],
    ["2,1,#,#,3,#,#", 3],
    ["2,#,3,2,1,#,#,#,#", 3],
    ["1,#,3,2,#,#,4,#,5,#,#", 4],
].forEach(t => {
    let tree = Tree.deserialize(t[0]);
    let actual = longestConsecutive(tree);
    console.log("Longest consecutive sequence length of", t[0], "->", actual);
    console.assert(actual === t[1]);
});