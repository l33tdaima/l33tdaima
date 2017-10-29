/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    var buffer = [];
    var recSerialize = function(root) {
        if (root === null) {
            buffer.push("#");
            return;
        }
        buffer.push(root.val);
        recSerialize(root.left);
        recSerialize(root.right);
    };

    recSerialize(root);
    return buffer.toString();
};

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
        if (elem === undefined || elem === '#') {
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
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
var node = new TreeNode(1);
console.log(serialize(node));
var test = "1,2,#,#,3,4,5,#,#,#,#";
console.log(serialize(deserialize(test)));
console.assert(test === serialize(deserialize(test)));
