/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
  if (s.length < t.length) [s, t] = [t, s];
  if (s.length - t.length > 1) return false;
  let editedOnce = false;
  for (let i = 0, j = 0; j < t.length; ++i, ++j) {
    if (s[i] === t[j]) continue;
    if (editedOnce) return false;
    editedOnce = true;
    if (s.length > t.length) j--;
  }
  return editedOnce || s.length > t.length;
};
// TEST
[
  ['ab', 'acdd', false],
  ['ab', 'acd', false],
  ['cab', 'ad', false],
  ['cat', 'cut', true],
  ['cat', 'cast', true],
  ['cat', 'cats', true],
  ['cat', 'at', true],
  ['cat', 'dog', false],
  ['cat', 'act', false],
  ['cat', 'cats', true]
].forEach(t => {
  const actual = isOneEditDistance(t[0], t[1]);
  console.log('Is', t[0], t[1], 'one edit distance? ->', actual);
  console.assert(actual === t[2]);
});
