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
var findTargetV1 = function(root, k) {
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
var findTargetV2 = function(root, k) {
    let set = new Set();
    let recTraverse = function(p, k) {
        if (p == null) {
            return false;
        }
        if (set.has(k - p.val)) {
            return true;
        } else {
            set.add(p.val);
            return recTraverse(p.left, k) || recTraverse(p.right, k);

        }
    }
    return recTraverse(root, k);
};
// TEST
[
    ["1,#,2,#,#", 3],
    ["1,#,2,#,#", 4],
    ["5,3,1,#,#,4,#,#,8,6,#,#,15,#,#", 10],
    ["5,3,1,#,#,4,#,#,8,6,#,#,15,#,#", 17],
].forEach(t => {
    let tree = Tree.deserialize(t[0]);
    console.log("Find", t[1], "in tree", t[0],
                "->", findTargetV1(tree, t[1]),
                findTargetV2(tree, t[1]));
});
