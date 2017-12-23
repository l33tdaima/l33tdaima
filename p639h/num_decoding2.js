/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let len = s.length;
    if (len === 0) { return 0; }
    // DP array of number way to decodea
    let numDec = Array.from({length: len + 1}, (v) => 0);
    numDec[0] = 1;
    if (s.charAt(0) === '*') {
        numDec[1] = 9;
    } else if (s.charAt(0) === '0') {
        numDec[1] = 0;
    } else {
        numDec[1] = 1;
    }
    for (let i = 2; i <= len; ++i) {
        // 1. Case for one char ahead
        let c = s.substring(i-1, i);
        let n = parseInt(c);
        if (c === '*') {
            numDec[i] += numDec[i-1] * 9;
        } else if (n >= 1) {
            numDec[i] += numDec[i-1];
        } // ignore '0'
        // 2. Case for two chars ahead
        c = s.substring(i-2, i);
        if (c.charAt(0) === '1' && c.charAt(1) === '*') {
            numDec[i] += numDec[i-2] * 9;
        } else if (c.charAt(0) === '2' && c.charAt(1) === '*') {
            numDec[i] += numDec[i-2] * 6;
        } else if (c.charAt(0) === '*' && c.charAt(1) === '*') {
            numDec[i] += numDec[i-2] * 15;
        } else if (c.charAt(0) === '*' && c.charAt(1) !== '*' && parseInt(c.charAt(1)) >= 7) {
            numDec[i] += numDec[i-2];
        } else if (c.charAt(0) === '*' && c.charAt(1) !== '*' && parseInt(c.charAt(1)) <= 6) {
            numDec[i] += numDec[i-2] * 2;
        } else if ((c.charAt(0) === '1' || c.charAt(0) === '2') && parseInt(c) <= 26) {
            numDec[i] += numDec[i-2];
        }
        numDec[i] %= 1000000007;
    }
    return numDec[len];
};
// TEST
// TEST
[
    "",
    "2",
    "*",
    "12",
    "1*",
    "*9",
    "123",
    "132",
    "19*798112"
].forEach(function (test) {
    console.log("# of Decoding '" + test + "' ->", numDecodings(test));
});
