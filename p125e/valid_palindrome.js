/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let [lo, hi] = [0, s.length - 1];
  while (lo < hi) {
    if (s[lo].match(/[0-9a-zA-Z]/) === null) {
      lo++;
    } else if (s[hi].match(/[0-9a-zA-Z]/) === null) {
      hi--;
    } else {
      if (s[lo].toLowerCase() !== s[hi].toLowerCase()) return false;
      lo++;
      hi--;
    }
  }
  return true;
};
[
  ['', true],
  ['A man, a plan, a canal: Panama', true],
  ['race a car', false],
  ['0P', false]
].forEach(t => {
  let act = isPalindrome(t[0]);
  console.log('Is "' + t[0] + '" palindrome? ->', act);
  console.assert(act === t[1]);
});
