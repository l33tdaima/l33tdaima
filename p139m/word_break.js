/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let slen = s.length;
    // build a wordDict map
    let wordMap = new Map();
    for (let j = 0, wlen = wordDict.length; j < wlen; ++j) {
        wordMap.set(wordDict[j], true);
    }
    // DP Matrix propogation
    let dp = new Array(slen + 1);
    dp[0] = true;
    for (let i = 1; i <= slen; ++i) {
        dp[i] = false;
        for (let j = 0; j < i; ++j) {
            if (dp[j] && wordMap.has(s.substring(j, i))) {
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
