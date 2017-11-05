/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var deserialize = function(data) {
    var buffer = data.split(',');
    var recDeserialize = function(buffer) {
        let elem = buffer.shift();
        if (elem === undefined || elem === '#' || elem === '') {
            return null;
        }
        let node = new TreeNode(elem);
        node.left  = recDeserialize(buffer);
        node.right = recDeserialize(buffer);
        return node;
    };
    return recDeserialize(buffer);
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    var recIsBalanced= function(r) {
        if (r === null) {
            return { maxDepth: 0,
                     isBalanced: true };
        }
        let leftRes  = recIsBalanced(r.left);
        let rightRes = recIsBalanced(r.right);
        return {
            maxDepth: Math.max(leftRes.maxDepth, rightRes.maxDepth) + 1,
            isBalanced: leftRes.isBalanced && 
                        rightRes.isBalanced && 
                        Math.abs(leftRes.maxDepth - rightRes.maxDepth) <= 1
        };
    };
    return recIsBalanced(root).isBalanced;
};

var testData = "1,#,2,#,3,#,#";
var tree = deserialize(testData);
console.log("isBalanced? ->", isBalanced(tree));
testData = "1,2,#,#,3,#,#";
tree = deserialize(testData);
console.log("isBalanced? ->", isBalanced(tree));
