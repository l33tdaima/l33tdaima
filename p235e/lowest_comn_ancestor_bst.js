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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === null) { return null; }
    let l = p, g = q;
    if (p.val > q.val) {
        l = q;
        g = p;
    }
    if (root.val >= l.val && root.val <= g.val) {
        return root;
    }
    else if (root.val > g.val) {
        return lowestCommonAncestor(root.left, l, g);
    }
    else {
        return lowestCommonAncestor(root.right, l, g);
    }
};
// TEST
var buildTestCase = function(data, pNum, qNum) {
    let buffer = data.split(',');
    let pNode = null;
    let qNode = null;
    let recDeserialize = function(buffer) {
        let elem = buffer.shift();
        if (elem === undefined || elem === '#' || elem === '') {
            return null;
        }
        let node = new Tree.TreeNode(parseInt(elem));
        if (parseInt(elem) === pNum) {
            pNode = node;
        }
        if (parseInt(elem) === qNum) {
            qNode = node;
        }

        node.left  = recDeserialize(buffer);
        node.right = recDeserialize(buffer);
        return node;
    };
    let rtNode = recDeserialize(buffer);
    return { root: rtNode,
             p: pNode,
             q: qNode };
};

var testData = "6,2,0,#,#,4,3,#,#,5,#,#,8,7,#,#,9,#,#";
[
    [2, 8],
    [2, 4],
    [5, 3],
    [7, 5],
    [8, 9],
].forEach(function(pqPair) {
    let testObj = buildTestCase(testData, pqPair[0], pqPair[1]);
    console.log("------");
    console.log("LCA of", pqPair[0], pqPair[1], "->\n", 
                lowestCommonAncestor(testObj.root,
                                     testObj.p,
                                     testObj.q).val);
});
testData = "#";
let tree = Tree.deserialize(testData);
console.log("------");
console.log("null case ->", lowestCommonAncestor(tree, null, null));
