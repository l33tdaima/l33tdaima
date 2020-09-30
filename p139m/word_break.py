from typing import List


class Solution:
    def wordBreakBT(self, s: str, wordDict: List[str]) -> bool:
        word_set = set(wordDict)

        def helper(s: str) -> bool:
            if s in word_set:
                return True
            for i in range(1, len(s) + 1):
                if s[:i] in word_set and helper(s[i:]):
                    return True
            return False

        return helper(s)

    def wordBreakDP(self, s: str, wordDict: List[str]) -> bool:
        word_set = set(wordDict)
        dp = [True] + [False] * len(s)
        for l in range(1, len(s) + 1):  # solve dp[1] to dp[len]
            for i in range(l):
                if dp[i] and s[i:l] in word_set:
                    dp[l] = True
                    break
        return dp[-1]


# TESTS
tests = [
    ("l", ["let"], False),
    ("gogo", ["go", "code"], True),
    ("leetcode", ["leet", "code"], True),
    ("applepenapple", ["apple", "pen"], True),
    ("catsandog", ["cats", "dog", "sand", "and", "cat"], False),
]
for s, wordDict, expected in tests:
    sol = Solution()
    actual = sol.wordBreakBT(s, wordDict)
    print("Break", s, "by wordDict", wordDict, "->", actual)
    assert actual == expected
    assert expected == sol.wordBreakDP(s, wordDict)

