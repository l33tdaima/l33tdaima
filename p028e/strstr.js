/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length < 1) {
        return -1;
    }
    for (let i = 0; ; ++i) {
        for (let j = 0; ; ++j) {
            if (j === needle.length) {
                return i;
            }
            if (i + j === haystack.length) {
                return -1;
            }
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }
    }
    return -1;
};

var testCases = [
    ["bac", "a"],
    ["abcdef", "bde"],
    ["Hello World", "Hello"],
    ["Hello World", "World"]
];
testCases.forEach(function(val){
    console.log("strStr(" + val[0] + "," + val[1] + ") = ", strStr(val[0], val[1]));
}, this);
