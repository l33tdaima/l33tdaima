var LadderNode = function (word, depth) {
    this.val = word;
    this.depth = depth;
};
// Function to compute the distance of two words
var wordDistance = function (word1, word2) {
    let dist = 0;
    for (let i = 0, len = word1.length; i < len; ++i) {
        if (word1.charAt(i) !== word2.charAt(i)) { dist ++; }
    }
    return dist;
}
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    console.assert(beginWord.length === endWord.length);
    let wlen = endWord.length;
    // step 1: Convert to a set
    let wordSet = new Set();
    for (let i = 0, len = wordList.length; i < len; ++i) {
        wordSet.add(wordList[i]);
    }
    if (!wordSet.has(endWord)) { return 0; }
    if (wordDistance(beginWord, endWord) === 1) { return 2; }
    // step 2: Build a tree in BFS fashion rooted by endWord
    wordSet.delete(endWord);
    let root = new LadderNode(endWord, 2);
    let queue = [root];
    while (queue.length > 0) {
        let wnode = queue.shift();
        let w = wnode.val;
        for (let i = 0; i < wlen; ++i) {
            for (let j = 0; j < 25; ++j) {
                if (ALPHABET.charAt(j) === w.charAt(i)) { continue; }
                // generate a possible tranformed word
                let t = w.slice(0, i) + ALPHABET.charAt(j) + w.slice(i + 1);
                if (wordSet.has(t)) {
                    // check if we found the word only 1 char distance from beginWord
                    if (wordDistance(beginWord, t) <= 1) {
                        return wnode.depth + 1;
                    }
                    wordSet.delete(t);
                    let ln = new LadderNode(t, wnode.depth + 1);
                    queue.push(ln);
                }
            }
        }
    }
    return 0;
};
// TEST
[ {
    expected: 0,
    begin: "m",
    end: "n",
    wordList: ["a", "b", "c"]
}, {
    expected: 2,
    begin: "a",
    end: "c",
    wordList: ["a", "b", "c"]
}, {
    expected: 5,
    begin: "hit",
    end: "cog",
    wordList: ["hot", "dot", "dog", "lot", "log", "cog"]
}, {
    expected: 3,
    begin: "lag",
    end: "cog",
    wordList: ["hot", "dot", "dog", "lot", "log", "cog"]
}, {
    expected: 0,
    begin: "dog",
    end: "bag",
    wordList: ["hot", "dot", "dog", "lot", "log", "cog"]
}, {
    expected: 0,
    begin: "dog",
    end: "hit",
    wordList: ["hot", "dot", "dog", "lot", "log", "cog"]
}, {
    expected: 3,
    begin: "hot",
    end: "dog",
    wordList: ["hot", "dot", "dog", "lot", "log", "cog"]
}, {
    expected: 4,
    begin: "hit",
    end: "dog",
    wordList: ["hot", "dot", "dog", "lot", "log", "cog"]
} ].forEach(function (test) {
    let output = ladderLength(test.begin, test.end, test.wordList);
    console.log(test.begin, "->", test.end, "=", 
                output, output === test.expected);
});
