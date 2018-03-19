/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    /* 1. Validate the string */
    let isValid = function (str) {
        let count = 0;
        for (let i = 0, c = ''; c = str[i]; ++i) {
            if (c === '(') { count ++; }
            else if (c === ')') {
                if (count === 0) { return false; }
                count --;
            }
        }
        return (count === 0);
    };
    /* 2. Compute l, r: min num of left and right removal needed */
    let l = 0, r = 0;
    for (let i = 0, c = ''; c = s[i]; ++i) {
        if (c === '(') { l ++; }
        else if (c === ')') {
            if (l === 0) { r ++; }
            else { l --; }
        }
    }
    //console.log("Need to remove", l, "( and", r, ")");
    let res = new Array();
    /* 3. Depth-first search the space to add result closure */
    let recDFS = function(ss, start, l, r) {
        if (l === 0 && r === 0 && isValid(ss)) {
            res.push(ss);
            return;
        }
        for (let i = start, c = ''; c = ss[i]; ++i) {
            if (i !== start && c === ss[i - 1]) continue;
            if (c === ')' && r > 0) {
                recDFS(ss.substring(0, i) + ss.substring(i + 1),
                       i, l, r - 1);
            }
            if (c === '(' && l > 0) {
                recDFS(ss.substring(0, i) + ss.substring(i + 1),
                       i, l - 1, r);

            }
        }
    };

    recDFS(s, 0, l, r);
    return res;
};
// TEST
[
    "()())()",
    "(a()",
    ")(",
    ")())(",
].forEach(t => {
    console.log("Remove invalid parentheses for", t, "->",
                removeInvalidParentheses(t));
});
