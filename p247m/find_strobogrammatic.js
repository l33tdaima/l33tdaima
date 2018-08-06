/**
 * @param {number} n
 * @return {string[]}
 */
const anyChoices = {
    "0": "0",
    "1": "1",
    "6": "9",
    "8": "8",
    "9": "6"
};
const oddChoices = [ "0", "1", "8"];
var findStrobogrammatic = function(n) {
    let ans = [];
    const recHelper = function(s) {
        if (s.length === n) {
            if (n === 1 || s[0] !== "0") {
                ans.push(s);
            }
            return;
        }
        for (let c in anyChoices) {
            recHelper(c + s + anyChoices[c]);
        }
    };

    let base = [""];
    if (n % 2 !== 0) { base = oddChoices; }

    for (let b of base) {
        recHelper(b);
    }
    return ans;
};
// TEST
[
    0, 1, 2, 3, 4
].forEach(t => {
    console.log("Find strobogrammtic of length", t, "->",
                findStrobogrammatic(t));
});
