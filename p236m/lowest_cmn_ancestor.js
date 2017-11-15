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
    let lca = null;
    /**
     * @param {TreeNode} current node
     * find target of q and p, final result are closure
     * @return count of node found
     */
    var recFindNode = function(curr) {
        if (curr === null) {
            return 0;
        }
        let foundInLeft = recFindNode(curr.left);
        if (foundInLeft === 2) { // already found in the left child
            return 2;
        }
        let foundInRight = recFindNode(curr.right);
        if (foundInRight === 2) { // already found in the right child
            return 2;
        }
        let foundTotal = foundInLeft + foundInRight;
        if (foundTotal === 2) { // lca in the middle
            lca = curr;
            return 2;
        }
        if (curr === p || curr === q) {
            if (foundTotal === 1) { // lca is the direct parent
                lca = curr;
            }
            return 1 + foundTotal;
        }
        return foundTotal; // nothing is found
    }
    let found = recFindNode(root);
    // console.log("Found", found, "nodes");
    return lca;
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

var testData = "3,5,6,#,#,2,7,#,#,4,#,#,1,0,#,#,8,#,#";
[
    [7, 4],
    [2, 7],
    [5, 4],
    [0, 8],
    [1, 3],
    [2, 1],
].forEach(function(pqPair) {
    let testObj = buildTestCase(testData, pqPair[0], pqPair[1]);
    console.log("------");
    console.log("LCA of", pqPair[0], pqPair[1], "->\n", 
                lowestCommonAncestor(testObj.root,
                                     testObj.p,
                                     testObj.q));
});
testData = "#";
let tree = Tree.deserialize(testData);
console.log("------");
console.log("null case ->", lowestCommonAncestor(tree, null, null));
