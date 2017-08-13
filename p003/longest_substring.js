/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charMap = {};
    let start = -1;
    let maxLen = 0;
    for (let i = 0; i < s.length; ++i) {
        let c = s.charAt(i);
        if (charMap[c] !== undefined) {
            start = Math.max(start, charMap[c]);
        }
        charMap[c] = i;
        maxLen = Math.max(maxLen, i-start);
        console.log(i, c, "start=", start, "max=", maxLen);
    }
    return maxLen;
};

var tests = [
    /*
    "abcabcbb",
    "bbbbb",
    "pwwkew",
    "c",
    */
    "abba"
];
tests.forEach(function(s) {
    console.log(s + ": ", lengthOfLongestSubstring(s));
}, this);
