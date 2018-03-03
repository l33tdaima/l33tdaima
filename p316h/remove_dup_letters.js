/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    if (s.length === 0) { return ""; }
    // create letter last seen map
    let letterCounts = Array.from({length: 26}, (v) => 0);
    for (let i = s.length - 1; i >= 0; --i) {
        letterCounts[s.charCodeAt(i) - 97] ++;
    }
    let pos = 0;
    for (let i = 0, len = s.length; i < len; ++i) {
        let ci = s.charCodeAt(i) - 97;
        if (s.charAt(i) < s.charAt(pos)) { pos = i; }
        if (--letterCounts[ci] === 0) { break; }
    }
    // removing all letters to the left of s[pos],
    // removing all s[pos]'s from s.
    let rex = new RegExp(s.charAt(pos), 'g');
    let subs = s.substring(pos + 1).replace(rex, "");
    return s.charAt(pos) + removeDuplicateLetters(subs);
};
// TEST
[
    ["abacb", "abc"],
    ["bcabc", "abc"],
    ["bcacb", "acb"],
    ["cbacdcbc", "acdb"],
].forEach((test) => {
    let after = removeDuplicateLetters(test[0]);
    console.log("Test removing duplicates in", test[0],
                after, after === test[1]);
});
