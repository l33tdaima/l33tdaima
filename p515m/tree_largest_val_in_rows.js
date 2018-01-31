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
var largestValuesDFS = function (root) {
    let results = [];
    let recHelper = function (node, depth) {
        if (node == null) { return; }
        if (depth > results.length) {
            results.push(node.val);
        } else {
            results[depth - 1] = Math.max(results[depth - 1], node.val);
        }
        recHelper(node.left,  depth + 1);
        recHelper(node.right, depth + 1);
    };
    recHelper(root, 1);
    return results;
};
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValuesBFS = function (root) {
    let results = [];
    if (root == null) { return results; }
    let queue = [{
        node: root,
        depth: 0
    }];
    let currDepth = 0;
    let currMax = Number.MIN_SAFE_INTEGER;
    while (queue.length > 0) {
        let p = queue.shift();
        if (p.depth !== currDepth) { 
            results.push(currMax);
            currDepth = p.depth;
            currMax = Number.MIN_SAFE_INTEGER;
        }
        currMax = Math.max(currMax, p.node.val);
        if (p.node.left !== null) {
            queue.push({
                node: p.node.left,
                depth: p.depth + 1
            });
        }
        if (p.node.right !== null) {
            queue.push({
                node: p.node.right,
                depth: p.depth + 1
            });
        }
    }
    if (currMax !== Number.MIN_SAFE_INTEGER) {
        results.push(currMax);
    }
    return results;
};
// TEST
[
    "1,#,#",
    "1,-1,#,#,#",
    "1,-1,#,#,-4,#,#",
    "1,3,5,#,#,3,#,#,2,#,9,#,#",
].forEach(function (test) {
    let root = Tree.deserialize(test);
    let resDFS = largestValuesDFS(root);
    let resBFS = largestValuesBFS(root);
    console.log("Largest values in each row of", test, "->",
                 resDFS, resBFS);
});
