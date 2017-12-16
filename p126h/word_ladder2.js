var LadderNode = function (word, depth, prev) {
    this.val = word;
    this.depth = depth;
    this.prev = prev;
};
var walkToRoot = function (p, beginWord) {
    let trace = [beginWord];
    while (p !== null) {
        trace.push(p.val);
        p = p.prev;
    }
    return trace;
};
// Function to validate tranformation by computing the distance of two words
var validTransform = function (word1, word2) {
    let dist = 0;
    for (let i = 0, len = word1.length; i < len; ++i) {
        if (word1.charAt(i) !== word2.charAt(i)) { dist ++; }
        if (dist > 1) { return false; }
    }
    return true;
}
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    // console.assert(beginWord.length === endWord.length);
    // Step 1: Convert to a set
    let wordSet = new Set();
    for (let i = 0, len = wordList.length; i < len; ++i) {
        wordSet.add(wordList[i]);
    }
    // Corner cases
    if (!wordSet.has(endWord)) { return []; }
    if (validTransform(beginWord, endWord)) {
        return [[beginWord, endWord]];
    }
    let res = [], shortestPath = Number.MAX_SAFE_INTEGER;
    // Step 2: Build a tree and BFS for the solution candidates
    let root = new LadderNode(endWord, 2, null);
    let queue = [root];
    let wlen = endWord.length;
    while (queue.length > 0) {
        let p = queue.shift();
        let w = p.val;
        wordSet.delete(w);
        if (p.depth + 1 > shortestPath) {
            break; // shortestPath has been found
        }
        for (let i = 0; i < wlen; ++i) {
            for (let j = 0; j < 25; ++j) {
                // generate a candidate transformed word
                let t = w.slice(0, i) + ALPHABET.charAt(j) + w.slice(i + 1);
                if (wordSet.has(t)) {
                    let ln = new LadderNode(t, p.depth + 1, p);
                    queue.push(ln);
                    // Do we have a solution?
                    if (validTransform(beginWord, t)) {
                        shortestPath = p.depth + 1;
                        // append a solution
                        res.push(walkToRoot(ln, beginWord));
                    }
                }
            }
        }
    }
    return res;
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
    begin: "lop",
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
    let output = findLadders(test.begin, test.end, test.wordList);
    let exp = test.expected;
    console.log(test.begin, "->", test.end, "=",
                exp === 0 ? output.length === exp : output[0].length === exp,
                "\n", output, "\n---");
});
