/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let ans = [];
    // Closure S and ans
    let recBacktrack = function(prefix, s) {
        if (s.length === 0) {
            ans.push(prefix);
            return;
        }
        if (s[0] >= '0' && s[0] <= '9') {
            recBacktrack(prefix + s[0], s.substr(1));
        } else {
            recBacktrack(prefix + s[0].toLowerCase(), s.substr(1));
            recBacktrack(prefix + s[0].toUpperCase(), s.substr(1));
        }
    };
    recBacktrack("", S);
    return ans;
};
// TEST
[
    "a1b2",
    "3z4",
    "12345xYz",
    "12345",
].forEach(t => {
    console.log("Letter case permutation of", t, "->\n",
                letterCasePermutation(t));
});