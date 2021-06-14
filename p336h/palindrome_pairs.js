const isPalindrome = (s) => {
  let [l, r] = [0, s.length - 1];
  while (l < r) if (s[l++] !== s[r--]) return false;
  return true;
};

var Trie = function () {
  this.nextl = Array.from({ length: 26 }, (v) => null);
  // the original index in the words list, -1 means it is not a complete word
  this.index = -1;
  // this list stores the index of word which ends with this letter and the rest of substring is palindrome
  this.pplist = [];
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @param {number} index in the original list
 * @return {void}
 */
Trie.prototype.insert = function (word, index) {
  let curr = this;
  for (let i = word.length - 1; i >= 0; --i) {
    let j = word.charCodeAt(i) - 97;
    if (!curr.nextl[j]) curr.nextl[j] = new Trie();
    if (isPalindrome(word.substring(0, i + 1))) curr.pplist.push(index);
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
Trie.prototype.searchPalindromePair = function (word, index, res) {
  let curr = this;
  for (let i = 0; i < word.length; ++i) {
    // Condition 1:
    // partially match a complete word, and the rest substring is palindrome
    if (
      curr.index >= 0 &&
      curr.index !== index &&
      isPalindrome(word.substring(i))
    ) {
      res.push([index, curr.index]);
    }
    curr = curr.nextl[word.charCodeAt(i) - 97];
    if (!curr) return;
  }
  // Condition 2:
  for (let j = curr.pplist.length - 1; j >= 0; --j) {
    if (index !== curr.pplist[j]) res.push([index, curr.pplist[j]]);
  }
};
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  let trie = new Trie();
  for (let i = 0; i < words.length; ++i) trie.insert(words[i], i);
  let ans = [];
  for (let i = 0; i < words.length; ++i)
    trie.searchPalindromePair(words[i], i, ans);
  return ans;
};
// TEST
[
  ['abcd', 'dcba', 'lls', 's', 'sssll'],
  ['bat', 'tab', 'cat'],
  ['a', ''],
  ['a', 'abc', 'aba', ''],
].forEach((t) => {
  console.log('Palindrome pairs of', t, '->', palindromePairs(t));
});
