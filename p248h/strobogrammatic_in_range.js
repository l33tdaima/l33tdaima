/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
const anyChoices = {
    "0": "0",
    "1": "1",
    "6": "9",
    "8": "8",
    "9": "6"
};
const compare = function(a, b) {
    let alen = a.length, blen = b.length;
    if (alen !== blen) {
        return alen - blen; 
    } else {
        for (let i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) {
                return a.charCodeAt(i) - b.charCodeAt(i);
            }
        }
        return 0;
    }
};
var strobogrammaticInRange = function(low, high) {
    let ans = 0;
    const recHelper = function(s) {
        if (compare(s, high) > 0) { return; }
        if (compare(s, low) >= 0) {
            if (s === "0" || s[0] !== "0") { ans++; }
        }
        for (let c in anyChoices) {
            recHelper(c + s + anyChoices[c]);
        }
    };
    [ "", "0", "1", "8"].forEach(b => {
        recHelper(b);
    });
    return ans;
};
// TEST
[
    ["0", "0"],
    ["0", "10"],
    ["1", "10"],
    ["50", "100"],
    ["50", "1000"]
].forEach(t => {
    console.log("Strobogrammatic in range", t[0], "and", t[1], "->",
                strobogrammaticInRange(t[0], t[1]));
});