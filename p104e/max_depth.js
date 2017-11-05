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
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) { return 0; }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

var testData = "1,2,#,#,3,4,#,5,#,#";
var tree = deserialize(testData);
console.log("Max depth ->", maxDepth(tree));
