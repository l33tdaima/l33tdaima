/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.links = new Array(26);
  this.isEnd = false;
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let p = this;
  for (let c of word) {
    const i = c.charCodeAt(0) - 97;
    if (p.links[i] == null) p.links[i] = new Trie();
    p = p.links[i];
  }
  p.isEnd = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let p = this;
  for (let c of word) {
    p = p.links[c.charCodeAt(0) - 97];
    if (!p) return false;
  }
  return p.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let p = this;
  for (let c of prefix) {
    p = p.links[c.charCodeAt(0) - 97];
    if (!p) return false;
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const obj = new Trie();
obj.insert('apple');
//console.assert(obj.search('apple') === true);
//console.assert(obj.search('app') === false);
console.assert(obj.startsWith('app') === true);
obj.insert('app');
//console.assert(obj.search('app') === true);
