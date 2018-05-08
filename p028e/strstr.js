/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let H = haystack.length;
    let N = needle.length;
    if (N === 0) { return 0; }
    for (let i = 0; i <= H - N; ++i) {
        if (haystack[i] !== needle[0]) continue;
        let j = 1;
        for (;j < N; ++j) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }
        if (j == N) { return i; }
    }
    return -1;
};
// TEST
[
    ["", "a"],
    ["bac", ""],
    ["bac", "a"],
    ["abcdef", "bde"],
    ["Hello World", "Hello"],
    ["Hello World", "World"]
].forEach(t => {
    console.log("strStr('" + t[0] + "', '" + t[1] + "') -> ",
                strStr(t[0], t[1]));
});
