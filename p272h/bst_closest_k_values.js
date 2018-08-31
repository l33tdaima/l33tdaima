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
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function(root, target, k) {
    let buffer = new Array();
    // Recursive helper function with closure of buffer, target and k
    // @return true if found closetKValues already
    const recHelper = function(node) {
        if (node == null) return false;
        if (recHelper(node.left)) return true;
        if (buffer.length === k) {
            if (Math.abs(target - buffer[0]) > Math.abs(target - node.val)) {
                buffer.shift();
            } else {
                return true;
            }
        }
        buffer.push(node.val);
        if (recHelper(node.right)) return true;
    };
    recHelper(root);
    return buffer;
};
// TEST
[
    {
        root: "1,#,#",
        target: 3.714286,
        k: 1,
        expected: [1]
    },
    {
        root: "4,2,1,#,#,3,#,#,5,#,#",
        target: 3.714286,
        k: 2,
        expected: [3,4]
    },
    {
        root: "4,2,1,#,#,3,#,#,5,#,#",
        target: 0.714286,
        k: 3,
        expected: [1,2,3]
    },
    {
        root: "4,2,1,#,#,3,#,#,5,#,#",
        target: 6.714286,
        k: 1,
        expected: [5]
    },
].forEach(t => {
    let tree = Tree.deserialize(t.root);
    let act = closestKValues(tree, t.target, t.k);
    console.log("The closest", t.k, "values to", t.target,
                "in tree", t.root, "->", act);
    console.assert(JSON.stringify(t.expected) == JSON.stringify(act));
});
