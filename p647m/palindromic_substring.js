/** O(N^3) solution
 * @param {string} s
 * @return {number}
 */
var countSubstringsDP = function(s) {
    var isPalindrome = function (t) {
        for (let i = 0, len = t.length; i < ~~(len/2); ++i) {
            if (t.charAt(i) !== t.charAt(len - 1 - i)) return false;
        }
        return true;
    };
    let slen = s.length;
    let dp = Array.from({length: slen + 1}, (v) => 0);
    dp[1] = 1;
    for (let i = 1; i < slen; ++i) {
        dp[i + 1] = dp[i];
        for (let j = 0; j <= i; ++j) {
            if (isPalindrome(s.substring(j, i + 1))) dp[i + 1] ++;
        }
    }
    return dp[slen];
};
/** O(N^2) solution
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;
    let slen = s.length;
    let checkPalindrome = function(i, j) {
        while (i >= 0 && j < slen && s.charAt(i) === s.charAt(j)) {
            count++; i--; j++;
        }
    };
    for (let i = 0, len = s.length; i < len; ++i) {
        checkPalindrome(i, i); // check odd len palindrome
        checkPalindrome(i, i + 1); // check odd len palindrome
    }
    return count;
};
// TEST
[
    "aa", // 1 + 2
    "ab", // 1 + 1
    "aab", // 3 + 1
    "aba", // 2 + 2
    "aaa", // 3(aa) + 1(aaa) + 1(aa) + 1(a)
    "aaaa", // 6(aaa) + 1(aaaa) + 1(aaa) + 1(aa) + 1(a)
].forEach(function (test) {
    console.log("'" + test + "' has palindromic substrings count ->",
                countSubstrings(test));
});
