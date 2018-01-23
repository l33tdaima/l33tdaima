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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    let result = [];
    if (root == null) return result;
    let queue = [{
        node: root,
        level: 0
    }];
    let level = 0, buffer = [];
    while (queue.length > 0) {
        let p = queue.shift(); // dequeue
        // flush when meeting a new level
        if (p.level > level) { 
            result.push(buffer);
            buffer = [];
            level = p.level; 
        }
        if (p.level % 2 === 0) {
            buffer.push(p.node.val);
        } else {
            buffer.unshift(p.node.val);
        }
        if (p.node.left !== null) {
            queue.push({
                node: p.node.left,
                level: level + 1
            });
        }
        if (p.node.right !== null) {
            queue.push({
                node: p.node.right,
                level: level + 1
            });
        }
    }
    result.push(buffer);
    return result;
};
// TEST
[
    "1,#,#",
    "3,9,#,#,20,15,#,#,7,#,#",
    "3,9,#,11,#,#,20,15,#,#,7,#,#",
].forEach(function (test) {
    let tree = Tree.deserialize(test);
    console.log("Zigzag of", test, "->",
        zigzagLevelOrder(tree));
});
