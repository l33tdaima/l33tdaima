/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    // cut[k]: number of cuts needs for length k, k = 0..(n+1)
    let cut = Array.from(s + " ", (v, k) => k - 1);
    for (let i = 0, len = s.length; i < len; ++i) {
        // odd length palindrome
        for (let j = 0;
            i-j >= 0 && i+j < len && s.charAt(i-j) === s.charAt(i+j);
            ++j) {
            cut[i+j+1] = Math.min(cut[i+j+1], cut[i-j] + 1);
        }
        // even length palindrome
        for (let j = 1;
            i-j+1 >= 0 && i+j < len && s.charAt(i-j+1) === s.charAt(i+j);
            ++j) {
            cut[i+j+1] = Math.min(cut[i+j+1], cut[i-j+1] + 1);
        }
    }
    //console.log("minCut:", cut);
    return cut[s.length];
};
// TEST
[
    ["", -1],
    ["ab", 1],
    ["aba", 0],
    ["aaba", 1],
].forEach(function(test) {
    console.log("Test case '" + test[0] + "' passed? ->",
                minCut(test[0]) === test[1]);
});
