/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    let j = 0, res = "";
    for (let i = S.length - 1; i >= 0; --i) {
        let c = S.charAt(i).toUpperCase();
        if (c !== '-') {
            if (j % K === 0 && j > 0) {
                res = c + "-" + res;
            } else {
                res = c + res;
            }
            j++;
        }
    }
    return res;
};
// TEST
[
    ["5F3Z-2e-9-w", 4],
    ["2-5g-3-J", 2],
    ["--a-a-a-a--", 2],
].forEach(t => {
    console.log("Formatted license key", t[0], "->",
                licenseKeyFormatting(t[0], t[1]));
});
