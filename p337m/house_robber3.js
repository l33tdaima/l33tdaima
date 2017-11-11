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
 * @return {number}
 */
var rob = function(root) {
    // For the given tree node, 
    // return if the root is selected in order to maximize
    // and the local max ammount
    var recMaxRob = function(node) {
        if (node == null) {
            return { robbed: false,
                     thisAmt: 0,
                     leftAmt: 0,
                     rightAmt: 0 };
        }
        let lt = recMaxRob(node.left);
        let rt = recMaxRob(node.right);
        if (!lt.robbed && !rt.robbed) {
            return { robbed: true,
                     thisAmt: node.val + lt.thisAmt + rt.thisAmt,
                     leftAmt: lt.thisAmt,
                     rightAmt: rt.thisAmt};
        } else { // child node is robbed
            let amtRob = node.val + lt.leftAmt + lt.rightAmt +
                         rt.leftAmt + rt.rightAmt;
            let notRob = lt.thisAmt + rt.thisAmt;
            if (amtRob > notRob) {
                return { robbed: true,
                         thisAmt: amtRob,
                         leftAmt: lt.thisAmt,
                         rightAmt: rt.thisAmt};
            } else {
                return { robbed: false,
                         thisAmt: notRob,
                         leftAmt: lt.thisAmt,
                         rightAmt: rt.thisAmt};
            }
        } 
    };
    let result = recMaxRob(root);
    return result.thisAmt;
};

[
    "1",
    "4,1,2,3,#,#,#,#,#",
    "3,2,#,3,#,#,3,#,1,#,#",
    "3,4,1,#,#,3,#,#,5,#,1,#,#"
].forEach(function (test){
    let tree = tm.deserialize(test);
    console.log("Max amount of robbery ->", rob(tree));
});
