/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set();
    for (let w of wordDict) {
        wordSet.add(w);
    }
    let slen = s.length;
    // We need a Word Break ver. 1 to do a sanity check if s is breakable
    let dp = new Array(slen + 1);
    dp[0] = true; // empty string is segmented 
    for (let i = 1; i <= slen; ++i) {
        dp[i] = false;
        for (let j = 0; j < i; ++j) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    if (!dp[slen]) return [];

    // DP memorization map
    const dpMap = new Map();
    dpMap.set(0, [""]);
    let i = 1;
    while (i <= slen) {
        let memo = [];
        for (let j = 0; j < i; ++j) {
            let substr = s.substring(j, i);
            if (dpMap.has(j) && wordSet.has(substr)) {
                // memorize it
                dpMap.get(j).forEach(v => {
                    memo.push((v === "" ? "": (v + " ")) + substr);
                });
            }
        }
        if (memo.length > 0) {
            dpMap.set(i, Array.from(memo));
        }
        // console.log(i, "=>", dpMap);
        ++i;
    }
    return dpMap.has(slen) ? dpMap.get(slen) : [];
};
// TEST
[
    {
        s: "catsanddog",
        wordDict: ["cat", "cats", "and", "sand", "dog"]
    },
    {
        s: "pineapplepenapple",
        wordDict: ["apple", "pen", "applepen", "pine", "pineapple"]
    },
    {
        s: "catsandog",
        wordDict: ["cats", "dog", "sand", "and", "cat"]
    },
    {
        s: "aaaaaa",
        wordDict: ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
    },
    {
        s: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
        wordDict: ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
    },
].forEach(t => {
    console.log("Word break for", t.s, "->",
                wordBreak(t.s, t.wordDict));
});
