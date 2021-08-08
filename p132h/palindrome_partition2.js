/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  // cut[k]: number of cuts needs for length k, k = 0..(n+1)
  let cut = Array.from(' ' + s, (v, k) => k - 1);
  for (let i = 0, len = s.length; i < len; ++i) {
    // i is the center of palindrome
    // odd length palindrome of radius j
    for (let j = 0; j <= i && i + j < len && s[i - j] === s[i + j]; ++j) {
      cut[i + j + 1] = Math.min(cut[i + j + 1], cut[i - j] + 1);
    }
    // even length palindrome
    for (
      let j = 1;
      i - j + 1 >= 0 && i + j < len && s[i - j + 1] === s[i + j];
      ++j
    ) {
      cut[i + j + 1] = Math.min(cut[i + j + 1], cut[i - j + 1] + 1);
    }
  }
  return cut[s.length];
};
// TEST
[
  ['aab', 1],
  ['a', 0],
  ['ab', 1],
  ['aba', 0],
  ['aaba', 1],
].forEach(([s, expected]) => {
  const actual = minCut(s);
  console.log(
    "Min cuts needed for a palindrome partition of'" + s + "' ->",
    actual
  );
  console.assert(actual === expected);
});
