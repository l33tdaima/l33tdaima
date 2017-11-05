/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    var buffer = data.split(',');
    var recDeserialize = function(buffer) {
        let elem = buffer.shift();
        if (elem === undefined || elem === '#' || elem === '') {
            return null;
        }
        let node = new TreeNode(parseInt(elem));
        node.left  = recDeserialize(buffer);
        node.right = recDeserialize(buffer);
        return node;
    };
    return recDeserialize(buffer);
};
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
    let tree = deserialize(val);
    console.log("Level order traversal ->", levelOrder(tree));
});
