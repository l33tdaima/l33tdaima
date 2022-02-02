/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let ans = [];
  if (s.length === 0 || p.length === 0 || s.length < p.length) return ans;
  // create char occurrence hash table from p
  let hash = Array.from({ length: 256 }, (v) => 0);
  for (let c of p) hash[c.charCodeAt(0)]++;

  let [left, right, count] = [0, 0, p.length];
  while (right < s.length) {
    // decrement occurence when moving right side of sliding window
    if (hash[s.charCodeAt(right++)]-- >= 1) count--;
    if (count === 0) ans.push(left);
    // increment (reset) occurence when moving left side of window
    if (right - left === p.length && hash[s.charCodeAt(left++)]++ >= 0) count++;
  }
  return ans;
};
// TESTS
[
  {
    s: 'cbaebabacd',
    p: 'abc',
    expected: [0, 6],
  },
  {
    s: 'abab',
    p: 'abb',
    expected: [1],
  },
  {
    s: 'abab',
    p: 'ab',
    expected: [0, 1, 2],
  },
].forEach(({ s, p, expected }) => {
  let actual = findAnagrams(s, p);
  console.log('Find anagram in', s, 'of', p, '->', actual);
  console.assert(actual.toString() === expected.toString());
});
