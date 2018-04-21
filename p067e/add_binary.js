/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let ans = "";
    let carry = 0, i = a.length - 1, j = b.length - 1;
    while (i >= 0 || j >= 0 || carry === 1) {
        carry += (i >= 0)? (a[i--] - '0') : 0;
        carry += (j >= 0)? (b[j--] - '0') : 0;
        ans = String.fromCharCode(carry % 2 + '0'.charCodeAt(0)) + ans;
        carry = ~~(carry / 2);
    }
    return ans;
};
// TEST
[
    ["11", "1"],
    ["10", "1010"],
    ["110", "10001"],
    ["111111", "1"]
].forEach(val => {
    let sum = addBinary(...val);
    console.log(val[0], "+", val[1], "=", sum, ", Test passed?",
                parseInt(val[0], 2) + parseInt(val[1], 2) === parseInt(sum, 2));
});
