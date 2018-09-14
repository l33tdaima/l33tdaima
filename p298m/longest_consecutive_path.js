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
    const recLCSLen = function(node, currPathLen, target) {
        if (node == null) return;
        if (node.val === target) {
            currPathLen ++;
        } else {
            currPathLen = 1;
        }
        maxLen = Math.max(maxLen, currPathLen);
        recLCSLen(node.left, currPathLen, node.val + 1);
        recLCSLen(node.right, currPathLen, node.val + 1);
    };
    recLCSLen(root, 0, null);
    return maxLen;
};
// TESTS
[
    ["#", 0],
    ["1,#,#", 1],
    ["1,2,#,#,#", 2],
    ["1,#,3,#,#", 1],
    ["2,#,3,2,1,#,#,#,#", 2],
    ["1,#,3,2,#,#,4,#,5,#,#", 3],
].forEach(t => {
    let tree = Tree.deserialize(t[0]);
    let actual = longestConsecutive(tree);
    console.log("Longest consecutive sequence length of", t[0], "->", actual);
    console.assert(actual === t[1]);
});
