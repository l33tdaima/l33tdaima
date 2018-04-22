/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let isValid = function(sub) {
        if (sub.charAt(0) === '0') return false;
        let n = parseInt(sub);
        return n >= 1 && n <= 26;
    };
    let len = s.length;
    if(len === 0) { return 0; }
    // DP array of # of ways to decode
    let numDec = Array.from({length:len + 1}, (v) => 0);
    numDec[0] = 1;
    numDec[1] = s.charAt(0) === '0' ? 0 : 1;
    for (let i = 2; i <= len; ++i) {
        if (isValid(s.substring(i-1, i))) {
            numDec[i] += numDec[i-1];
        }
        if (isValid(s.substring(i-2, i))) {
            numDec[i] += numDec[i-2];
        }
    }
    return numDec[len];
};
// TEST
[
    "",
    "2",
    "12",
    "102",
    "1002",
    "1302",
    "123",
    "132",
].forEach(function (test) {
    console.log("# of Decoding '" + test + "' ->", numDecodings(test));
});
