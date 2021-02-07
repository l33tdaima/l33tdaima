/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let ans = Array.from({ length: s.length }, (v) => Number.MAX_SAFE_INTEGER);
  for (let i = 0, prev = -1; i < s.length; ++i) {
    if (s[i] === c) prev = i;
    if (prev >= 0) ans[i] = Math.min(ans[i], i - prev);
  }
  for (let i = s.length - 1, prev = -1; i >= 0; --i) {
    if (s[i] === c) prev = i;
    if (prev >= 0) ans[i] = Math.min(ans[i], prev - i);
  }
  return ans;
};
// TESTS
[
  ['loveleetcode', 'e', [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]],
  ['aaab', 'b', [3, 2, 1, 0]],
  ['vvvvvvv', 'v', [0, 0, 0, 0, 0, 0, 0]],
].forEach(([s, c, expected]) => {
  const actual = shortestToChar(s, c);
  console.log('The shortest distance from', s, 'to' + c + '->', actual);
  console.assert(actual.toString() === expected.toString());
});
