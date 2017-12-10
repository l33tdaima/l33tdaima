/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    if (n < 1) { return ""; }
    let res = "";
    while (n !== 0) {
        let lsb = (n - 1) % 26;
        res = String.fromCharCode(65 + lsb) + res;
        n = ~~((n - 1) / 26);
    }
    return res;
};
// TEST
let ub = 100;
for (let n = 1; n <= ub; ++n) {
    console.log("", n, "->", convertToTitle(n));
}
[ 2000, 5000 ].forEach(function (n) {
    console.log("", n, "->", convertToTitle(n));
});
