/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ans = [];
  const backtrack = (s, open, close, max) => {
    // console.log("s =", s, ", open =", open, ", close =", close);
    if (s.length === max * 2) {
      // console.log("Ouptut:", s);
      ans.push(s);
      return;
    }
    if (open < max) backtrack(s + '(', open + 1, close, max);
    if (open > close) backtrack(s + ')', open, close + 1, max);
  };

  backtrack('', 0, 0, n);
  return ans;
};

var argv2 = process.argv[2];
var n = argv2 === undefined ? 0 : parseInt(argv2);
console.log(generateParenthesis(n));
