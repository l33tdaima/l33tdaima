/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let array = s.split('');
  let [l, r] = [0, s.length - 1];
  const VOWELS = 'aeiouAEIOU';
  while (l < r) {
    while (l < r && !VOWELS.includes(array[l])) l++;
    while (l < r && !VOWELS.includes(array[r])) r--;
    [array[l], array[r]] = [array[r], array[l]];
    l++;
    r--;
  }
  return array.join('');
};

// TESTS
[
  ['', ''],
  ['a', 'a'],
  ['AeIoU', 'UoIeA'],
  ['hello', 'holle'],
  ['HELLO', 'HOLLE'],
  ['leetcode', 'leotcede'],
].forEach(([s, expected]) => {
  const actual = reverseVowels(s);
  console.log('Vowels reversed string', s, '->', actual);
  console.assert(actual == expected);
});
