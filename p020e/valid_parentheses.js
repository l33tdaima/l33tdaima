/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (let c of s) {
    if (c === '(') stack.push(')');
    else if (c === '{') stack.push('}');
    else if (c === '[') stack.push(']');
    else {
      if (stack.length == 0 || stack.pop() !== c) return false;
    }
  }
  return stack.length === 0;
};
// TEST
[
  ['{}', true],
  ['()[]{}', true],
  ['(]', false],
  ['([)]', false],
  ['{[]}', true],
].forEach(([s, expected]) => {
  const actual = isValid(s);
  console.log('Is', s, 'a valid parentheses? ->', actual);
  console.assert(actual === expected);
});
