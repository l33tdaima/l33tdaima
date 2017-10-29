/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.isWord = false;
    this.links = Array.from({length: 26}, (v) => null);
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let curr = this;
    for (let i = 0, len = word.length; i < len; ++i) {
        let j = word.charCodeAt(i) - 97;
        if (curr.links[j] === null) {
            curr.links[j] = new WordDictionary;
        }
        curr = curr.links[j];
    }
    curr.isWord = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    // Search down from the current node for the partial word
    // Return if found
    var recDFSHelper = function(node, partWord) {
        if (partWord.length === 0) {
            return node.isWord;
        }
        let code = partWord.charCodeAt(0);
        if (code === 46) { // wildcard '.'
            for(let j = 0, len = node.links.length; j < len; ++j) {
                if (node.links[j] !== null) {
                    if (recDFSHelper(node.links[j], partWord.substring(1))) {
                        return true;
                    }
                }
            }
            return false;
        }
        else {
            return (node.links[code - 97] !== null) &&
                    recDFSHelper(node.links[code - 97], partWord.substring(1));
        }
    };

    return recDFSHelper(this, word);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
var dict = new WordDictionary;
dict.addWord("bad");
dict.addWord("dad");
dict.addWord("mad");
console.log("search '' ->", dict.search(""));
console.log("search 'ma' ->", dict.search("ma"));
console.log("search 'pad' ->", dict.search("pad"));
console.log("search 'dad' ->", dict.search("dad"));
console.log("search 'date' ->", dict.search("date"));
console.log("search '.ad' ->", dict.search(".ad"));
console.log("search 'b..' ->", dict.search("b.."));
