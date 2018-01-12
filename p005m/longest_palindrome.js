/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let slen = s.length;
    let findPalindrome = function(l, r) {
        while (l >= 0 && r < slen && s.charAt(l) === s.charAt(r)) {
            l--; r++;
        }
        return {start: l + 1, 
                length: r - l - 1};
    };
    let maxstart = 0, maxlen = 0;
    for (let i = 0; i < slen; ++i) {
        let odd = findPalindrome(i, i);
        let even = findPalindrome(i, i + 1);
        if (odd.length > maxlen) {
            maxstart = odd.start;
            maxlen = odd.length;
        }
        if (even.length > maxlen) {
            maxstart = even.start;
            maxlen = even.length;
        }
    }
    return s.substr(maxstart, maxlen);
};
// TEST
[
    "babad",
    "cbbd"
].forEach(function (test) {
    console.log("Longest palindrome of '" + test + "' ->",
                longestPalindrome(test));
});
