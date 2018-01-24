/**
 * @param {string[]} words
 */
var WordDistance = function(words) {
    this.map = new Map();
    for (let i = 0, len = words.length; i < len; ++i) {
        if (this.map.has(words[i])) {
            this.map.get(words[i]).push(i);
        } else {
            this.map.set(words[i], [i]);
        }
    }
    console.log(this.map);
};
/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    console.assert(this.map.has(word1));
    console.assert(this.map.has(word2));
    let iWord1 = this.map.get(word1);
    let iWord2 = this.map.get(word2);
    let shortestDis = Number.MAX_SAFE_INTEGER;
    for (let i = 0, len1 = iWord1.length; i < len1; ++i) {
        for (let j = 0, len2 = iWord2.length; j < len2; ++j) {
            shortestDis = Math.min(shortestDis, 
                                   Math.abs(iWord1[i] - iWord2[j]));
        }
    }
    return shortestDis;
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = Object.create(WordDistance).createNew(words)
 * var param_1 = obj.shortest(word1,word2)
 */
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
    let obj = new WordDistance(test.words);
    console.log("------");
    console.log(test.words);
    console.log("Shortest distance from '" + test.word1 + "' to '" + test.word2 + "' ->",
                obj.shortest(test.word1, test.word2));
});
