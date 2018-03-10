var Trie = function() {
    this.nextl = Array.from({length: 26}, (v) => null);
    // the index in the list, -1 means it is not a complete word
    this.index = -1;
    // this list stores the index of word which ends with this letter and the rest of substring is palindrome
    this.pplist = [];
};
var isPalindrome = function(s) {
    let l = 0, r = s.length - 1;
    while (l < r) {
        if (s.charAt(l++) !== s.charAt(r--)) {
            return false;
        }
    }
    return true;
}
/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @param {number} index in the original list
 * @return {void}
 */
Trie.prototype.insert = function(word, index) {
    let curr = this;
    for (let i = word.length - 1; i >= 0; --i) {
        let j = word.charCodeAt(i) - 97;
        if (curr.nextl[j] === null) {
            curr.nextl[j] = new Trie();
        }
        if (isPalindrome(word.substring(0, i + 1))) { // note: i + 1 instead of i
            curr.pplist.push(index);
        }
        curr = curr.nextl[j];
    }
    curr.index = index;
    // after a complete word, the rest "" is always palindrome
    curr.pplist.push(index);
};

/**
 * Search the given word,index, once find palindrome pair, append to res 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.searchPalindromePair = function(word, index, res) {
    let curr = this;
    for (let i = 0, len = word.length; i < len; ++i) {
        // Condition 1:
        // partially match a complete word, and the rest substring is palindrome
        if (curr.index >= 0 && curr.index !== index && 
            isPalindrome(word.substring(i))) {
            res.push([index, curr.index]);
        }
        let j = word.charCodeAt(i) - 97;
        curr = curr.nextl[j];
        if (curr === null) { return; }
    }
    // Condition 2:
    for (let j = curr.pplist.length - 1; j >= 0; --j) {
        if (index !== curr.pplist[j]) {
            res.push([index, curr.pplist[j]]);
        }
    }
};
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    let trie = new Trie();
    let len = words.length;
    for (let i = 0; i < len; ++i) {
        trie.insert(words[i], i);
    }
    let res = [];
    for (let i = 0; i < len; ++i) {
        trie.searchPalindromePair(words[i], i, res);
    }
    return res;
};
// TEST
[
    ["a","abc","aba",""],
    ["a",""],
    ["bat", "tab", "cat"],
    ["abcd", "dcba", "lls", "s", "sssll"]
].forEach(t => {
    console.log("Palindrome pairs of", t, "->", palindromePairs(t));
});
