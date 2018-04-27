/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // build a wordDict map
    let wordSet = new Set();
    for (let w of wordDict) {
        wordSet.add(w);
    }
    // DP: truth value of substring up to i are word segmented
    let slen = s.length;
    let dp = new Array(slen + 1);
    dp[0] = true; // empty string is segmented 
    for (let i = 1; i <= slen; ++i) {
        dp[i] = false;
        for (let j = 0; j < i; ++j) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                //console.log("Found dp["+j+"] &&", s.substring(j, i));
                dp[i] = true;
                break;
            }
        }
    }
    return dp[slen];
};
//TEST
[
    {s: "l",
     wordDict: ["let"]},
    {s: "leetcode",
     wordDict: ["leet", "code"]},
    {s: "gogo",
     wordDict: ["go", "code"]},
].forEach(function (test) {
    console.log("Break", test.s, "by wordDict", test.wordDict,
                "->", wordBreak(test.s, test.wordDict));
});
