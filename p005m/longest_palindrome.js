/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let findPalindrome = function(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    return [l + 1, r - l - 1]; // [start, length]
  };
  let [maxstart, maxlen] = [0, 0];
  for (let i = 0; i < s.length; ++i) {
    let [oddstart, oddlen] = findPalindrome(i, i);
    let [evenstart, evenlen] = findPalindrome(i, i + 1);
    if (oddlen > maxlen) [maxstart, maxlen] = [oddstart, oddlen];
    if (evenlen > maxlen) [maxstart, maxlen] = [evenstart, evenlen];
  }
  return s.substr(maxstart, maxlen);
};
// TEST
['babad', 'cbbd'].forEach(t => {
  console.log('Longest palindrome of "' + t + '" ->', longestPalindrome(t));
});
