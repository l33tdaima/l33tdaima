var UnionFind = function() {
  this.id = new Map();
  this.sz = new Map(); // sizes used for weighted quick union
};
UnionFind.prototype.root = function(w) {
  let p = this.id.get(w);
  while (p !== undefined && p !== w) {
    // path compression
    if (this.id.get(p)) {
      this.id.set(w, this.id.get(p));
    }
    w = p;
    p = this.id.get(w);
  }
  return w;
};
UnionFind.prototype.unite = function(w1, w2) {
  let r1 = this.root(w1);
  let r2 = this.root(w2);
  if (!this.sz.has(r1)) this.sz.set(r1, 0);
  if (!this.sz.has(r2)) this.sz.set(r2, 0);
  let sz1 = this.sz.get(r1);
  let sz2 = this.sz.get(r2);
  if (sz1 < sz2) {
    this.id.set(r1, r2);
    this.sz.set(r2, sz1 + sz2);
  } else {
    this.id.set(r2, r1);
    this.sz.set(r1, sz1 + sz2);
  }
};
UnionFind.prototype.find = function(w1, w2) {
  let r1 = this.root(w1);
  let r2 = this.root(w2);
  if (r1 && r2 && r1 === r2) {
    return true;
  } else {
    return false;
  }
};
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
var areSentencesSimilarTwo = function(words1, words2, pairs) {
  if (words1.length !== words2.length) return false;
  // map instead of array version of union-find array
  let unionFind = new UnionFind();
  for (let p of pairs) {
    unionFind.unite(p[0], p[1]);
  }
  for (let i = 0; i < words1.length; ++i) {
    if (words1[i] !== words2[i] && !unionFind.find(words1[i], words2[i])) {
      return false;
    }
  }
  return true;
};
[
  {
    words1: ["great"],
    words2: ["great"],
    pairs: [],
    expected: true
  },
  {
    words1: ["great"],
    words2: ["fine"],
    pairs: [],
    expected: false
  },
  {
    words1: ["great", "acting", "skills"],
    words2: ["fine", "drama", "talent"],
    pairs: [
      ["great", "good"],
      ["fine", "good"],
      ["acting", "drama"],
      ["skills", "talent"]
    ],
    expected: true
  },
  {
    words1: ["great", "acting", "skills"],
    words2: ["fine", "painting", "talent"],
    pairs: [["great", "fine"], ["drama", "acting"], ["skills", "talent"]],
    expected: false
  },
  {
    words1: ["an", "extraordinary", "meal"],
    words2: ["one", "good", "dinner"],
    pairs: [
      ["great", "good"],
      ["extraordinary", "good"],
      ["well", "good"],
      ["wonderful", "good"],
      ["excellent", "good"],
      ["fine", "good"],
      ["nice", "good"],
      ["any", "one"],
      ["some", "one"],
      ["unique", "one"],
      ["the", "one"],
      ["an", "one"],
      ["single", "one"],
      ["a", "one"],
      ["truck", "car"],
      ["wagon", "car"],
      ["automobile", "car"],
      ["auto", "car"],
      ["vehicle", "car"],
      ["entertain", "have"],
      ["drink", "have"],
      ["eat", "have"],
      ["take", "have"],
      ["fruits", "meal"],
      ["brunch", "meal"],
      ["breakfast", "meal"],
      ["food", "meal"],
      ["dinner", "meal"],
      ["super", "meal"],
      ["lunch", "meal"],
      ["possess", "own"],
      ["keep", "own"],
      ["have", "own"],
      ["extremely", "very"],
      ["actually", "very"],
      ["really", "very"],
      ["super", "very"]
    ],
    expected: true
  }
].forEach(t => {
  let actual = areSentencesSimilarTwo(t.words1, t.words2, t.pairs);
  console.log("", t.words1, "is similar to", t.words2, "->", actual);
  console.assert(actual === t.expected);
});
