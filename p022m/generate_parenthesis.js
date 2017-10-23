/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // Recursive helper
    var recAddHelper = function(solutions, s, open, close, max) {
        console.log("s =", s, ", open =", open, ", close =", close);
        if (s.length === max*2) {
            console.log("Ouptut:", s);
            solutions.push(s);
            return;
        }
        if (open < max) {
            recAddHelper(solutions, s+"(", open + 1, close, max);
        }
        if (open > close) {
            recAddHelper(solutions, s+")", open, close + 1, max);
        }
    }

    var solutions = new Array();
    recAddHelper(solutions, "", 0, 0, n);
    return solutions;
};

var argv2 = process.argv[2];
var n = (argv2 === undefined) ? 0 : parseInt(argv2);
console.log(generateParenthesis(n));
