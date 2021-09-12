/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const [ss, stack] = ['(' + s + ')', []];
  for (let c of ss) {
    switch (c) {
      case ' ':
        continue;
      case '(':
      case '+':
      case '-':
        stack.push(c);
        break;
      case ')':
        // calculate from the matching '('
        let [from, res] = [stack.lastIndexOf('('), 0];
        for (let k = from + 1, op = null; k < stack.length; ++k) {
          if (typeof stack[k] === 'number') {
            if (op === '+') res += stack[k];
            else if (op === '-') res -= stack[k];
            else res = stack[k]; // first operand
          } else {
            op = stack[k]; // operator
          }
        }
        stack.splice(from);
        stack.push(res);
        break;
      default:
        let tl = stack.length - 1;
        if (typeof stack[tl] === 'number') {
          stack[tl] = stack[tl] * 10 + parseInt(c);
        } else {
          stack.push(parseInt(c));
        }
        break;
    }
  }
  return stack[0];
};
// TEST
[
  ['1 + 11', 12],
  [' 2-1 + 2 ', 3],
  ['(1+(4+5+2)-3)+(6+8)', 23],
].forEach(([s, expected]) => {
  const actual = calculate(s);
  console.log(s, '=', actual);
  console.assert(actual === expected);
});
