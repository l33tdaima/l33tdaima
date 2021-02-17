/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  let ans = [];
  // Closure S and ans
  let recBacktrack = function (prefix, s) {
    if (s.length === 0) {
      ans.push(prefix);
      return;
    }
    if (s[0] >= '0' && s[0] <= '9') {
      recBacktrack(prefix + s[0], s.substr(1));
    } else {
      recBacktrack(prefix + s[0].toLowerCase(), s.substr(1));
      recBacktrack(prefix + s[0].toUpperCase(), s.substr(1));
    }
  };
  recBacktrack('', S);
  return ans;
};
// TEST
[
  ['a1b2', ['a1b2', 'a1B2', 'A1b2', 'A1B2']],
  ['3z4', ['3z4', '3Z4']],
  ['12345', ['12345']],
  ['0', ['0']],
].forEach(([S, expected]) => {
  const actual = letterCasePermutation(S);
  console.log('Letter case permutation of', S, '->', actual);
  console.assert(actual.toString() === expected.toString());
});
