/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  const [ps, sp] = [new Map(), new Map()];
  strlist = str.split(' ');
  if (pattern.length !== strlist.length) return false;
  for (let i = 0; i < pattern.length; ++i) {
    if (ps.has(pattern[i])) {
      if (ps.get(pattern[i]) !== strlist[i]) return false;
    } else ps.set(pattern[i], strlist[i]);
    if (sp.has(strlist[i])) {
      if (sp.get(strlist[i]) !== pattern[i]) return false;
    } else sp.set(strlist[i], pattern[i]);
  }
  return true;
};
// TEST
[
  ['abba', 'cat cat dog', false],
  ['abba', 'dog cat cat dog', true],
  ['abba', 'dog cat cat fish', false],
  ['aaaa', 'dog cat cat dog', false],
  ['abba', 'dog dog dog dog', false],
].forEach(([pattern, string, expected]) => {
  const actual = wordPattern(pattern, string);
  console.log(
    'String',
    string,
    'follows the same pattern',
    pattern,
    '->',
    actual
  );
  console.assert(actual === expected);
});
