/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    console.assert(word1 !== word2);
    console.assert(words.length >= 2);

    let shortestDis = Number.MAX_SAFE_INTEGER;
    let iWord1 = -1, iWord2 = -1;
    for (let i = 0, len = words.length; i < len; ++i) {
        if (words[i] === word1) {
            iWord1 = i;
        } else if (words[i] === word2) {
            iWord2 = i;
        }
        if (iWord1 >= 0 && iWord2 >= 0) {
            shortestDis = Math.min(shortestDis, Math.abs(iWord1 - iWord2));
        }
    }
    return shortestDis;
};
// TEST
[
    {
        words: ["practice", "makes", "perfect", "coding", "makes"],
        word1: "coding",
        word2: "practice"
    }, {
        words: ["practice", "makes", "perfect", "coding", "makes"],
        word1: "makes",
        word2: "coding"
    }
].forEach(function (test) {
    console.log("------");
    console.log(test.words);
    console.log("Shortest distance from '" + test.word1 + "' to '" + test.word2 + "' ->",
                shortestDistance(test.words, test.word1, test.word2));
});
