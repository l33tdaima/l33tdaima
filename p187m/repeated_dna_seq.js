/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let seen = new Set(), repeated = new Set();
    for (let i = 0, len = s.length; i + 9 < len; ++i) {
        let ten = s.substring(i, i + 10);
        if (seen.has(ten)) {
            repeated.add(ten);
        } else {
            seen.add(ten);
        }
    }
    return Array.from(repeated);
};
// TEST
[
    "AAAAAAAAAAA",
    "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",
].forEach(function (test) {
    console.log("Repeated DNA Sequence in", test, "->\n", findRepeatedDnaSequences(test));
});
