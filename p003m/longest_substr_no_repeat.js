/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let charMap = new Array();
  let [start, maxLen] = [-1, 0];
  for (let i = 0; i < s.length; ++i) {
    let c = s.charCodeAt(i);
    if (charMap[c] !== undefined) {
      start = Math.max(start, charMap[c]);
    }
    charMap[c] = i;
    maxLen = Math.max(maxLen, i - start);
  }
  return maxLen;
};

[
  ['', 0],
  ['abcabcbb', 3],
  ['bbbbb', 1],
  ['pwwkew', 3],
  ['c', 1],
  ['abba', 2]
].forEach(t => {
  let actual = lengthOfLongestSubstring(t[0]);
  console.log('Length of longest substring of', t[0], '->', actual);
  console.assert(actual === t[1]);
});
