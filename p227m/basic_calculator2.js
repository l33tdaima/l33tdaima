/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let tobesum = [];
    let op = '+';
    let num = 0;
    for (let i = 0, len = s.length; i < len; ++i) {
        let c = s.charAt(i);
        if (c >= '0' && c <= '9') {
            num = num * 10 + parseInt(c);
        }
        if ( ("+-*/".indexOf(c) !== -1) || i === len - 1) {
            switch (op) {
                case '+': { tobesum.push(num); } break;
                case '-': { tobesum.push(-num); } break;
                case '*': { tobesum.push(tobesum.pop() * num); } break;
                case '/': { tobesum.push(~~(tobesum.pop() / num)); } break;
                default:
            }
            op = c;
            num = 0;
        }
    }
    let res = 0;
    for (let i = 0, len = tobesum.length; i < len; ++i) {
        res += tobesum[i];
    }
    return res;
};
// TEST
[
    [" 1+1", 2],
    ["10 -4", 6],
    ["2* 12", 24],
    [" 3/2 ", 1],
    ["3+2*2", 7],
    [" 3+5 / 2 ", 5],
].forEach(function (test) {
    let res = calculate(test[0]);
    console.log(test[0], "=", res, res === test[1]);
});
