/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    if (s.length < t.length) {
        let tmp = s;
        s = t;
        t = tmp;
    }
    if (s.length - t.length > 1) { return false; }
    let editedOnce = false;
    for (let i = 0, j = 0; j < t.length; ++i, ++j) {
        if (s[i] === t[j]) { continue; }
        if (editedOnce) { return false; }
        editedOnce = true;
        if (s.length > t.length) {
            j--;
        }
    }
    return editedOnce || s.length > t.length;
};
// TEST
[
    ["ab", "acd"],
    ["cab", "ad"],
    ["cat", "cut"],
    ["cat", "cast"],
    ["cat", "cats"],
    ["cat", "at"],
    ["cat", "dog"],
    ["cat", "act"],
].forEach(t => {
    console.log("One edit distance between", t[0], "and", t[1], "->",
                isOneEditDistance(t[0], t[1]));
});
