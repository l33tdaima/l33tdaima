/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const isOperator = (token) =>
    token === '+' || token === '-' || token === '*' || token === '/';

  const calc = (token, op1, op2) => {
    switch (token) {
      case '+':
        return op1 + op2;
      case '-':
        return op1 - op2;
      case '*':
        return op1 * op2;
      case '/':
        return ~~(op1 / op2);
    }
  };
  const stack = [];
  for (let token of tokens) {
    if (isOperator(token)) {
      let op2 = stack.pop();
      let op1 = stack.pop();
      stack.push(calc(token, op1, op2));
    } else {
      stack.push(parseInt(token));
    }
  }
  return stack.pop();
};
// TEST
[
  [['2', '1', '+', '3', '*'], 9],
  [['4', '13', '5', '/', '+'], 6],
  [['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'], 22],
].forEach(([tokens, expected]) => {
  const actual = evalRPN(tokens);
  console.log(tokens, '->', actual);
  console.assert(actual === expected);
});
