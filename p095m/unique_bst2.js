/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const Tree = require('binary_tree');
var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    /**
     * @param {number} s: start
     * @param {number} e: end 
     * @return {TreeNode[]}
     */
    var recGenerateTreesByRange = function(s, e) {
        let trees = new Array();
        if (s > e) {
            trees.push(null);
            return trees;
        }
        if (s === e) {
            trees.push(new Tree.TreeNode(parseInt(s)));
            return trees;
        }
        for (let rtVal = s; rtVal <= e; ++rtVal) {
            // root node by each value in the range
            let lhsTrees = recGenerateTreesByRange(s, rtVal - 1);
            for (let il = 0, lenl = lhsTrees.length; il < lenl; ++il) {
                let rhsTrees = recGenerateTreesByRange(rtVal + 1, e);
                for (let ir = 0, lenr = rhsTrees.length; ir < lenr; ++ir) {
                    let root = new Tree.TreeNode(parseInt(rtVal));
                    root.left = lhsTrees[il];
                    root.right = rhsTrees[ir];
                    trees.push(root);
                }
            }
        }
        return trees;
    };
    return recGenerateTreesByRange(1, n);
};

var n = (process.argv[2] === undefined) ? 1 : parseInt(process.argv[2]);
var trees = generateTrees(n);
console.log("The number of unique BSTs is:", trees.length);
trees.forEach(function(tree) {
    console.log(Tree.serialize(tree));
}, this);
