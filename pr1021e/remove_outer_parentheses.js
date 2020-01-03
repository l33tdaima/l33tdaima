/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParenthesesV1 = function(S) {
  let [ans, opened, start] = ['', 0, 0];
  for (let i = 0; i < S.length; ++i) {
    if (S[i] === '(') opened++;
    else {
      opened--;
      if (opened === 0) {
        ans += S.substring(start + 1, i);
        start = i + 1;
      }
    }
  }
  return ans;
};
var removeOuterParenthesesV2 = function(S) {
  let [ans, opened] = ['', 0];
  for (let c of S) {
    if (c === '(' && opened++ > 0) ans += c;
    if (c === ')' && opened-- > 1) ans += c;
  }
  return ans;
};

// TESTS
[
  ['(()())(())', '()()()'],
  ['(()())(())(()(()))', '()()()()(())'],
  ['()()', '']
].forEach(t => {
  const actual = removeOuterParenthesesV2(t[0]);
  console.log('After removing outer parenthesess of', t[0], '->', actual);
  console.assert(actual === t[1]);
  console.assert(removeOuterParenthesesV1(t[0]) === t[1]);
});
