/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let ps = new Map(), sp = new Map();
    strlist = str.split(" ");
    if (pattern.length !== strlist.length) {
        return false;
    }
    for (let i = 0, len = pattern.length; i < len; ++i) {
        if (ps.has(pattern[i])) {
            if (ps.get(pattern[i]) !== strlist[i]) { return false; }
        } else {
            ps.set(pattern[i], strlist[i]);
        }
        if (sp.has(strlist[i])) {
            if (sp.get(strlist[i]) !== pattern[i]) { return false; }
        } else {
            sp.set(strlist[i], pattern[i]);
        }
    }
    return true;
};
// TEST
[
    ["abba", "cat cat dog"],
    ["abba", "dog cat cat dog"],
    ["abba", "dog cat cat fish"],
    ["aaaa", "dog cat cat dog" ],
    ["abba", "dog dog dog dog" ],
].forEach(t => {
    console.log("Pattern", t[1], "follows", t[0], "? ->",
                wordPattern(t[0], t[1]));
});
