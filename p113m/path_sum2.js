/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const tm = require('../p297h/serialize_binary_tree');
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let result = [];
    var recPathSum = function(p, s, path) {
        if (p == null) {
            return;
        }
        path.push(p.val);
        if (p.left === null && p.right === null && p.val === s) {
            result.push(Array.from(path));
        }
        recPathSum(p.left, s - p.val, path);
        recPathSum(p.right, s - p.val, path);
        path.pop(p.val);
    };
    
    recPathSum(root, sum, new Array()); 
    return result;
};

[
    ["#", 0],
    ["1", 1],
    ["1", 2],
    ["1,2,3,#,#,#,#", 6],
    ["1,2,3,#,#,#,#", 7],
    ["5,4,11,7,#,#,2,#,#,#,8,13,#,#,4,5,#,#,1,#,#", 22],
    ["5,4,11,7,#,#,2,#,#,#,8,13,#,#,4,5,#,#,1,#,#", 23],
].forEach(function(test) {
    let tree = tm.deserialize(test[0]);
    console.log(test[0], " path sum of", test[1],
                "->\n", pathSum(tree, test[1]));
    console.log("------");
});
