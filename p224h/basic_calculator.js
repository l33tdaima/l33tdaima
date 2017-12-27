/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let ss = '(' + s + ')';
    let stack = [];
    for (let i = 0, len = ss.length; i < len; ++i) {
        let c = ss.charAt(i);
        switch (c) {
            case ' ': { continue; } break;
            case '(':
            case '+':
            case '-': { stack.push(c); } break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9': {
                let tl = stack.length - 1;
                if (typeof(stack[tl]) === "number") {
                    stack[tl] = stack[tl] * 10 + parseInt(c);
                } else {
                    stack.push(parseInt(c));
                }
            } break;
            case ')': {
                // calculate from the matching '('
                let from = stack.lastIndexOf('(');
                let res = 0;
                for (let k = from + 1, slen = stack.length, op = null; k < slen; ++k) {
                    if (typeof(stack[k]) === "number") {
                        if (op === '+') {
                            res += stack[k];
                        } else if (op === '-') {
                            res -= stack[k];
                        } else { // first operand
                            res = stack[k];
                        }
                    } else { // operator
                        op = stack[k];
                    }
                }
                stack.splice(from);
                stack.push(res);
            } break;
            default:
                console.assert(false, "Invalid input: " + c);
        }
    }
    console.assert(stack.length === 1);
    return stack[0];
};
// TEST
[
    ["1 + 11", 12],
    [" 2-1 + 2 ", 3],
    ["(1+(4+5+2)-3)+(6+8)", 23],
].forEach(function (test) {
    console.log(test[0], "=", test[1], test[1] === calculate(test[0]));
});
