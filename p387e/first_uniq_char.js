/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let len = s.length;
    let count = Array.from({length: 26}, (v) => 0);
    for (let i = len - 1; i >= 0; --i) {
        count[s.charCodeAt(i) - 97] ++;
    }
    for (let i = 0; i < len; ++i) {
        if (count[s.charCodeAt(i) - 97] === 1) {
            return i;
        }
    }
    return -1;
};
// TEST
[
    "leetcode",
    "teetcooce",
    "dddccdbba",
    "loveleetcode",
].forEach(function (test) {
    console.log("First unique char of", test, "->",
                firstUniqChar(test));
});
