/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let isOperator = function (token) {
        if (token === "+" || token === "-" ||
            token === "*" || token === "/") {
            return true;
        } else {
            return false;
        }
    };
    let binaryOperator = function (token, op1, op2) {
        if (token === "+") {
            return op1 + op2;
        } else if (token === "-") {
            return op1 - op2;
        } else if (token === "*") {
            return op1 * op2;
        } else if (token === "/") {
            return ~~(op1 / op2);
        } else {
            console.assert("Inavlid operator " + token);
        }
    };
    let stack = [];
    for (let i = 0, len = tokens.length; i < len; ++i) {
        if (isOperator(tokens[i])) {
            let op2 = stack.pop();
            let op1 = stack.pop();
            stack.push(binaryOperator(tokens[i], op1, op2));
        } else {
            stack.push(parseInt(tokens[i]));
        }
    }
    return stack.pop();
};
// TEST
[
    ["2", "1", "+", "3", "*"],
    ["4", "13", "5", "/", "+"],
].forEach(function (test) {
    console.log(test, "->", evalRPN(test));
});
