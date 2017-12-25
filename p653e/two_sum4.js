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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let nums = [];
    let toArray = function (node) {
        if (node === null) {
            return;
        }
        toArray(node.left);
        nums.push(node.val);
        toArray(node.right);
    };
    toArray(root);
    
    for (let lo = 0, hi = nums.length - 1; lo < hi;) {
        let s = nums[lo] + nums[hi];
        if (s === k) {
            return true;
        } else if (s < k) {
            lo ++;
        } else {
            hi --;
        }
    }
    return false;
};
// TEST
[
    ["1,#,2,#,#", 3],
    ["1,#,2,#,#", 4],
    ["5,3,1,#,#,4,#,#,8,6,#,#,15,#,#", 10],
    ["5,3,1,#,#,4,#,#,8,6,#,#,15,#,#", 17],
].forEach(function (test) {
    let tree = Tree.deserialize(test[0]);
    console.log("Find", test[1], "in tree", test[0],
                "->", findTarget(tree, test[1]));
});
