/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let [ans, slen] = [0, s.length];
  const checkPalindrome = (l, r) => {
    while (l >= 0 && r < slen && s[l] === s[r]) {
      [l, r, ans] = [l - 1, r + 1, ans + 1];
    }
  };
  for (let i = 0; i < slen; ++i) {
    checkPalindrome(i, i); // check odd len palindrome
    checkPalindrome(i, i + 1); // check odd len palindrome
  }
  return ans;
};
// TEST
const f = (s, expected) => [s, expected];
[
  f('aa', 3),
  f('ab', 2),
  f('aab', 4),
  f('aba', 4),
  f('aaa', 6),
  f('aaaa', 10),
].forEach(([s, expected]) => {
  const actual = countSubstrings(s);
  console.log('# of palindromic substrings in', s, '->', actual);
  console.assert(actual === expected);
});
