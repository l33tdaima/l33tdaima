from typing import List


class Solution:
    def longestStrChain(self, words: List[str]) -> int:
        dp = dict()
        for w in sorted(words, key=len):
            dp[w] = max(dp.get(w[:i] + w[i + 1 :], 0) + 1 for i in range(len(w)))
        return max(dp.values())


# TESTS
for words, expected in [
    (["a", "b", "ab", "bac"], 2),
    (["a", "b", "ba", "bca", "bda", "bdca"], 4),
    (["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"], 5),
    (["abcd", "dbqca"], 1),
]:
    sol = Solution()
    actual = sol.longestStrChain(words)
    print("The longest string chain in", words, "->", actual)
    assert actual == expected
