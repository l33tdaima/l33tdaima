/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(words, word1, word2) {
    console.assert(words.length >= 2);

    let shortestDis = Number.MAX_SAFE_INTEGER;
    let iWord1 = -1, iWord2 = -1;
    for (let i = 0, len = words.length; i < len; ++i) {
        if (words[i] !== word1 && words[i] !== word2) {
            continue;
        }
        if (words[i] === word1 && words[i] === word2) {
            if (iWord1 <= iWord2) { iWord1 = i; }
            else { iWord2 = i; }
        } else if (words[i] === word1) {
            iWord1 = i;
        } else { // (words[i] === word2)
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
    }, {
        words: ["practice", "makes", "perfect", "coding", "makes"],
        word1: "makes",
        word2: "makes"
    }
].forEach(function (test) {
    console.log("------");
    console.log(test.words);
    console.log("Shortest distance from '" + test.word1 + "' to '" + test.word2 + "' ->",
                shortestWordDistance(test.words, test.word1, test.word2));
});