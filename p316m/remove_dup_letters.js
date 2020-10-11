/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  if (s === '') return '';
  // counter of letters
  let letterCounts = Array.from({ length: 26 }, (v) => 0);
  for (let i = s.length - 1; i >= 0; --i) letterCounts[s.charCodeAt(i) - 97]++;
  let pos = 0;
  for (let i = 0; i < s.length; ++i) {
    let c = s.charCodeAt(i) - 97;
    if (s[i] < s[pos]) pos = i;
    if (--letterCounts[c] === 0) break;
  }
  let regex = new RegExp(s[pos], 'g');
  return (
    s[pos] + removeDuplicateLetters(s.substring(pos + 1).replace(regex, ''))
  );
};
// TEST
[
  ['abacb', 'abc'],
  ['bcabc', 'abc'],
  ['bcacb', 'acb'],
  ['cbacdcbc', 'acdb'],
].forEach(([s, expected]) => {
  let actual = removeDuplicateLetters(s);
  console.log('Removing duplicates in', s, '->', actual);
  console.assert(actual === expected);
});
