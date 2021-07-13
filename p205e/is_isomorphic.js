/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let stot = {};
  let ttos = {};
  for (let i = 0, len = s.length; i < len; ++i) {
    if (stot[s[i]] !== ttos[t[i]]) return false;
    stot[s[i]] = ttos[t[i]] = i;
  }
  return true;
};
// TEST
[
  ['add', 'egg', true],
  ['foo', 'bar', false],
  ['paper', 'title', true],
  ['ab', 'aa', false],
].forEach(([s, t, expected]) => {
  const actual = isIsomorphic(s, t);
  console.log(s, 'and', t, 'are isomorphic ->', actual);
  console.assert(actual === expected);
});
