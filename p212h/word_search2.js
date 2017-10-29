/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    /**
     * Constructor of the trie
     */
    var Trie = function() {
        this.word = null;
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
        curr.word = word;
    };

    /**
     * Output words from the given trie node and position on board[ib, jb]
     * @param board from closure
     * @param ib row index on board
     * @param jb column index on board
     * @param ptrie node in the trie
     * @param result result array
     * return void while result might be updated
     */ 
    var recFind = function(ib, jb, ptrie, result) {
        let idx = board[ib][jb].charCodeAt(0) - 97;
        if (board[ib][jb] === '+' || ptrie.links[idx] === null) { return; }

        let pn = ptrie.links[idx];
        if (pn.word !== null) {
            result.push(pn.word);
            pn.word = null; // de-duplicate
        }

        let c = board[ib][jb];
        board[ib][jb] = '+';
        // DFS search for the next char
        if (ib > 0) { recFind(ib - 1, jb, pn, result); } // up
        if (jb > 0) { recFind(ib, jb - 1, pn, result); } // left
        if (ib < board.length - 1)     { recFind(ib + 1, jb, pn, result); } // down
        if (jb < board[ib].length - 1) { recFind(ib, jb + 1, pn, result); } // right
        board[ib][jb] = c;
    };

    // build the trie from the words dictionary
    let trie = new Trie;
    for (let w = 0, len = words.length; w < len; ++w) {
        trie.insert(words[w]);
    }
    // kick off the search
    let result = [];
    for (let i = 0, ilen = board.length; i < ilen; ++i) {
        for (let j = 0, jlen = board[i].length; j < jlen; ++j) {
            recFind(i, j, trie, result);
        }
    }
    return result;
};

var board = [
    ['o','a','a','n'],
    ['e','t','a','e'],
    ['i','h','k','r'],
    ['i','f','l','v']
];
var words = ["oath", "pea", "eat", "rain", "a"];
var res = findWords(board, words);
console.log("Word search results", res);
