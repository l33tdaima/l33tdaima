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
var rightSideView = function (root) {
    let res = [];
    if (root == null) { return res; }
    let queue = [{
        node: root,
        depth: 0
    }];
    while (queue.length > 0) {
        let elem = queue.shift();
        if (elem.node.left !== null) {
            queue.push({
                node: elem.node.left,
                depth: elem.depth + 1
            });
        }
        if (elem.node.right !== null) {
            queue.push({
                node: elem.node.right,
                depth: elem.depth + 1
            })
        }
        if (queue.length === 0 ||
            queue[0].depth > elem.depth) {
            res.push(elem.node.val);
        }
    }
    return res;
};
// TEST
[
    "",
    "1,#,#",
    "1,2,#,#,#",
    "1,2,#,5,#,#,3,#,4,#,#",
    "1,2,5,#,#,#,3,#,#",
].forEach((test) => {
    let tree = Tree.deserialize(test);
    console.log("Right side view of tree", test, "->",
        rightSideView(tree));
});
