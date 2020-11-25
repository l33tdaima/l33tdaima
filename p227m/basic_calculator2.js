/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let [stack, op, num] = [[], '+', 0];
  for (let i = 0; i < s.length; ++i) {
    if (s[i] >= '0' && s[i] <= '9') {
      num = num * 10 + parseInt(s[i]);
    }
    if ('+-*/'.indexOf(s[i]) !== -1 || i === s.length - 1) {
      switch (op) {
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(stack.pop() * num);
          break;
        case '/':
          stack.push(~~(stack.pop() / num));
          break;
        default:
      }
      [op, num] = [s[i], 0];
    }
  }
  return stack.reduce((s, v) => s + v, 0);
};
// TEST
[
  [' 1+1', 2],
  ['10 -4', 6],
  ['2* 12', 24],
  [' 3/2 ', 1],
  ['3+2*2', 7],
  [' 3+5 / 2 ', 5],
  ['14-3/2', 13],
].forEach(function (test) {
  let res = calculate(test[0]);
  console.log(test[0], '=', res, res === test[1]);
});
