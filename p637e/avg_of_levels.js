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
 * @return {number[]}
 */
var averageOfLevelsV1 = function(root) {
    let ans = [];
    if (root == null) { return ans; }
    let queue = [root, null];
    let sum = 0, count = 0;
    while (queue.length > 0) {
        let node = queue.shift();
        if (node === null) {
            ans.push(sum/count);
            sum = 0; count = 0;
            if (queue.length > 0) {
                queue.push(node);
            }
        } else {
            sum += node.val;
            count ++;
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
    }
    return ans;
};
var averageOfLevelsV2 = function(root) {
    let ans = [];
    if (root == null) { return ans; }
    let queue = [root];
    while (queue.length > 0) {
        let sum = 0;
        let count = queue.length;
        for (let i = 0; i < count; ++i) {
            let node = queue.shift();
            sum += node.val;
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        ans.push(sum/count);
    }
    return ans;
};
// TEST
[
    "3,9,#,#,20,15,#,#,7,#,#",
].forEach(t => {
    let root = Tree.deserialize(t);
    console.log("Average of levels of", t, "->",
                averageOfLevelsV2(root));
});
