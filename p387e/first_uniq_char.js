/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const counter = Array.from({ length: 26 }, (v) => 0);
  for (let c of s) counter[c.charCodeAt(0) - 97]++;
  for (let i = 0; i < s.length; ++i)
    if (counter[s.charCodeAt(i) - 97] === 1) return i;
  return -1;
};
// TEST
[
  ['leetcode', 0],
  ['teetcooce', -1],
  ['dddccdbba', 8],
  ['loveleetcode', 2],
].forEach((t) => {
  const actual = firstUniqChar(t[0]);
  console.log('First unique char of', t[0], '->', actual);
  console.assert(actual === t[1]);
});
