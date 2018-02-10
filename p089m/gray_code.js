/**
 * @param {number} n
 * @return {number[]}
 */
var grayCodeV1 = function(n) {
    if (n === 0) { return [0]; }

    // generate the binary string list
    let grayCodeBin = function(n) {
        if (n === 1) { return ["0", "1"]; }
        let bin = grayCodeBin(n - 1);
        let blen = bin.length;
        let result = [];
        // '0' + normal order
        for (let i = 0; i < blen; ++i) {
            result.push("0" + bin[i]);
        }
        // '1' + reversed order
        for (let i = blen - 1; i >= 0; --i) {
            result.push("1" + bin[i]);
        }
        return result;
    };
    let binstr = grayCodeBin(n);
    let decimalResult = [];
    for (let i = 0, len = binstr.length; i < len; ++i)
    {
        decimalResult.push(parseInt(binstr[i], 2));
    }
    return decimalResult;
};

var grayCodeV2 = function(n) {
    let result = [0];
    for (let i = 0; i < n; ++i) {
        for (let j = result.length - 1; j >= 0; --j) {
            // '1' + reversed list of (n-1)
            result.push(result[j] | (1 << i));
        }
    }
    return result;
};
// TEST
[
    0, 1, 2, 3, 4
].forEach(function (test) {
    console.log("Gray code of", test, "->");
    console.log("  ", grayCodeV2(test));
});
