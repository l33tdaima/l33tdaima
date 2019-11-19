/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  const isPalindrome = function(l, r) {
    while (l < r) {
      if (s[l++] !== s[r--]) return false;
    }
    return true;
  };

  let [l, r] = [0, s.length - 1];
  while (l < r && s[l] === s[r]) {
    l++;
    r--;
  }
  if (l >= r) return true;
  return isPalindrome(l + 1, r) || isPalindrome(l, r - 1);
};

var validPalindromeAtMostK = function(s, k) {
  let isPalindrome = function(l, r, d) {
    if (l >= r) return true;
    if (s[l] === s[r]) {
      return isPalindrome(l + 1, r - 1, d);
    } else {
      return (
        d > 0 &&
        (isPalindrome(l + 1, r, d - 1) || isPalindrome(l, r - 1, d - 1))
      );
    }
  };
  return isPalindrome(0, s.length - 1, k);
};
// TEST
[
  'aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga',
  '',
  'aaaa',
  'aba',
  'abca',
  'abcea',
  'bacca',
  'accab',
  'acdef'
].forEach(t => {
  console.log(
    'Can we make',
    t,
    'a palindrome with at most 1 removal? ->',
    validPalindrome(t)
  );
  console.assert(validPalindromeAtMostK(t, 1) === validPalindrome(t));
  console.log(
    'Can we make',
    t,
    'a palindrome with at most 2 removal? ->',
    validPalindromeAtMostK(t, 2)
  );
});
