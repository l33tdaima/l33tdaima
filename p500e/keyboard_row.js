/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const map = new Map();
  "qwertyuiop".split("").forEach(c => {
    map.set(c, 1);
  });
  "asdfghjkl".split("").forEach(c => {
    map.set(c, 2);
  });
  "zxcvbnm".split("").forEach(c => {
    map.set(c, 3);
  });
  let ans = [];
  for (let w of words) {
    let valid = true;
    for (let i = 1; i < w.length; ++i) {
      if (map.get(w[i].toLowerCase()) !== map.get(w[i - 1].toLowerCase())) {
        valid = false;
        break;
      }
    }
    if (valid) ans.push(w);
  }
  return ans;
};

var findWordsV2 = function(words) {
  return words.filter(
    word =>
      /\b[qwertyuiop]+\b/i.test(word) ||
      /\b[asdfghjkl]+\b/i.test(word) ||
      /\b[zxcvbnm]+\b/i.test(word)
  );
};

// TESTS
[["Hello", "Alaska", "Dad", "Peace"]].forEach(t => {
  console.log("Words can be typed on one row ->", findWords(t));
});
