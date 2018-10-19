
var UnionFind = function() {
    this.id = new Map();
};
UnionFind.prototype.quickUnion = function(w1, w2) {
    if (!this.id.has(w1)) this.id.set(w1, w1);
    if (!this.id.has(w2)) this.id.set(w2, w2);
};
UnionFind.prototype.find = function(w1, w2) {

};
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
var areSentencesSimilarTwo = function(words1, words2, pairs) {
    // map instead of array version of union-find tree
    let unionFind = new Map();
};
