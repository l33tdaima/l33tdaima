/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.isEnd = false;
    this.links = Array.from({length: 26}, (v) => null);
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this;
    for (let i = 0, len = word.length; i < len; ++i) {
        let j = word.charCodeAt(i) - 97;
        if (curr.links[j] === null) {
            curr.links[j] = new Trie;
        }
        curr = curr.links[j];
    }
    curr.isEnd = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this;
    for (let i = 0, len = word.length; i < len; ++i) {
        let j = word.charCodeAt(i) - 97;
        if (curr.links[j] === null) {
            return false;
        }
        else {
            curr = curr.links[j];
        }
    }
    return curr.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this;
    for (let i = 0, len = prefix.length; i < len; ++i) {
        let j = prefix.charCodeAt(i) - 97;
        if (curr.links[j] === null) {
            return false;
        }
        else {
            curr = curr.links[j];
        }
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

var trie = new Trie;
var word = "app";
trie.insert(word);
trie.insert("apps");
word = "app";
console.log("Is '" + word + "'in the trie?:", trie.search(word));
var prefix = "cod";
console.log("Is there word in the trie start with", prefix + "?:", trie.startsWith(prefix));
