/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  let bannedSet = new Set();
  for (let b of banned) {
    bannedSet.add(b);
  }
  let [mostCommon, mostHit] = [null, Number.MIN_SAFE_INTEGER];
  let memo = new Map();
  paragraph.split(/[\s!?',;\.]/).forEach(w => {
    if (w.length === 0) return;
    let wNorm = w.toLowerCase();
    if (bannedSet.has(wNorm)) return;
    let hit = memo.get(wNorm);
    hit = hit === undefined ? 1 : hit + 1;
    memo.set(wNorm, hit);
    if (hit > mostHit) {
      [mostCommon, mostHit] = [wNorm, hit];
    }
  });
  return mostCommon;
};
// TESTS
[
  {
    paragraph: "Bob hit a ball, the hit BALL flew far after it was hit.",
    banned: ["hit"]
  }
].forEach(t => {
  console.log("Most common word ->", mostCommonWord(t.paragraph, t.banned));
});
