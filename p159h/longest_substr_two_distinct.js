/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
  const charCounter = Array.from({ length: 128 }, v => 0);
  let [ans, start, distinct] = [0, 0, 0];
  for (let end = 0; end < s.length; ++end) {
    // move end pointer and update hashmap's char occurences
    if (charCounter[s.charCodeAt(end)]++ === 0) distinct++;
    // until the distinct exceeding 2, then we move start to drop the distinct
    while (distinct > 2) {
      if (charCounter[s.charCodeAt(start)]-- === 1) distinct--;
      start++;
    }
    ans = Math.max(ans, end - start + 1);
  }
  return ans;
};
// TEST
[
  ['eceba', 3],
  ['ccaabbb', 5],
  ['CCCCC', 5],
  ['abcde', 2],
  ['CODEaaaabbbbcde', 8]
].forEach(t => {
  actual = lengthOfLongestSubstringTwoDistinct(t[0]);
  console.log(
    "Longest substring length in '" + t[0] + "' with at most two distincts ->",
    actual
  );
  console.assert(t[1] === actual);
});
