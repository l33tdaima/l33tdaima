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
    //console.log(this.map);
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
    for (let i = 0, j = 0, len1 = iWord1.length, len2 = iWord2.length;
         i < len1 && j < len2;) {
        let index1 = iWord1[i], index2 = iWord2[j];
        if (index1 < index2) {
            shortestDis = Math.min(shortestDis, index2 - index1);
            i++;
        } else {
            shortestDis = Math.min(shortestDis, index1 - index2);
            j++;
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
