/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  for (let i = 0; ; ++i) {
    for (let j = 0; ; ++j) {
      if (j === needle.length) return i;
      if (i + j === haystack.length) return -1;
      if (haystack[i + j] !== needle[j]) break;
    }
  }
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
  console.log("strStr('" + t[0] + "', '" + t[1] + "') -> ", strStr(t[0], t[1]));
});
