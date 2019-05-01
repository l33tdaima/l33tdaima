/**
 * // Definition for a Node.
 */
function Node(val, children) {
  this.val = val;
  this.children = children;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
function serialize(root) {
  let data = '';
  // Helper function takes closure of data
  const recHelper = node => {
    if (node == null) return;
    data += ' ' + node.val + ' ' + node.children.length;
    for (let child of node.children) {
      recHelper(child);
    }
  };
  recHelper(root);
  return data.trim();
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function deserialize(data) {
  if (data === undefined || data.length <= 0) return null;
  let buffer = data.split(' ');
  const recHelper = buffer => {
    if (buffer.length === 0) return null;
    if (buffer.length === 1) return new Node(parseInt(buffer[0]), []);
    let [root, size] = buffer;
    buffer.shift();
    buffer.shift();
    let children = [];
    for (let i = 0; i < size; ++i) {
      children.push(recHelper(buffer));
    }
    return new Node(parseInt(root), children);
  };
  return recHelper(buffer);
}

// TEST
[
  '',
  '1 0',
  '1 1 2 0',
  '1 2 2 0 3 0',
  '1 3 2 0 3 0 4 0',
  '1 10 2 0 3 0 4 0 5 0 6 0 7 0 8 0 9 0 10 0 11 0',
  '1 1 2 1 3 0',
  '1 3 3 2 5 0 6 0 2 0 4 0'
].forEach(t => {
  const tree = deserialize(t);
  console.log('Deserialize/Serialize', t, '->', serialize(tree) === t);
});
