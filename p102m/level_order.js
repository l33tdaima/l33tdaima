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
var levelOrder = function(root) {
    let result = [];
    if (root === null) {
        return result;
    }
    let queue = [{node:  root,
                  level: 0}];
    while (queue.length > 0) {
        // update iteration queue
        let p = queue.shift();
        if (p.node.left !== null) {
            queue.push({node:  p.node.left,
                        level: p.level + 1});
        }
        if (p.node.right !== null) {
            queue.push({node:  p.node.right,
                        level: p.level + 1});
        }
        // update result array
        if (result[p.level] === undefined) {
            result.push([p.node.val]);
        }
        else {
            result[p.level].push(p.node.val);
        }
    }
    return result;
};

var testData = [
    "1",
    "1,2,#,#,3,#,#",
    "1,2,3,4,#,#,#,#,#",
    "1,#,2,#,3,#,4,#,#",
    "1,#,2,3,4,#,#,#,#",
    "1,#,2,3,#,#,4,#,#",
    "1,2,4,#,#,5,#,7,#,#,3,6,#,8,#,#,#",
    "3,9,#,#,20,15,#,#,7,#,#"
];
testData.forEach(function(val) {
    let tree = Tree.deserialize(val);
    console.log("Level order traversal ->", levelOrder(tree));
});
