/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
let Tree = require('binary_tree');
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    let map = new Map();
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    let queue = new Array();
    let res = [];
    if (root == null) { return res; }
    queue.push([0, root]);
    while (queue.length > 0) {
        let pair = queue.shift();
        min = Math.min(min, pair[0]);
        max = Math.max(max, pair[0]);
        let v = map.get(pair[0]);
        if (v === undefined) {
            map.set(pair[0], [pair[1].val]);
        } else {
            v.push(pair[1].val);
            map.set(pair[0], v);
        }
        if (pair[1].left !== null) {
            queue.push([pair[0] - 1, pair[1].left]);
        }
        if (pair[1].right !== null) {
            queue.push([pair[0] + 1, pair[1].right]);
        }
    }

    for (let i = min; i <= max; ++i) {
        if (map.has(i)) {
            res.push(map.get(i));
        }
    }
    return res;
};
//TEST
[
    "3,9,#,#,20,15,#,#,7,#,#",
    "3,9,4,#,#,0,#,#,8,1,#,#,7,#,#",
    "3,9,4,#,#,0,#,2,#,#,8,1,5,#,#,#,7,#,#",
].forEach(t => {
    let tree = Tree.deserialize(t);
    console.log("Vertical order traversal of", t, "->",
                verticalOrder(tree));
});
