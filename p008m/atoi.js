/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let s = str.trim();
    let sign = 1, result = 0;
    for (let i = 0, len = s.length; i < len; ++i) {
        if (i === 0) {
            if (s.charAt(i) === '-') {
                sign = -1;
                continue;
            } else if (s.charAt(i) === '+') {
                continue;
            }
        }
        let digit = s.charCodeAt(i) - 48;
        if (digit >= 0 && digit <= 9) {
            result = result * 10 + digit;
            if (result > 2147483647) {
                result = 2147483647 + ((sign > 0) ? 0 : 1);
                break;
            }
        } else {
            break;
        }
    }
    return sign * result;
};
// TEST
[
    ["", 0],
    [" -1", -1],
    ["+007", 7],
    [" - 9", 0],
    [" 4546 9090", 4546],
    ["4000000000", 2147483647],
    ["-3000000000", -2147483648],
].forEach(function (test) {
    let res = myAtoi(test[0]);
    console.log(test[0], "->", res, res === test[1]);
});
