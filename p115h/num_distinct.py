class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        S, T = len(s), len(t)
        dp = [[1] * (S + 1)] + [[0] * (S + 1) for _ in range(T)]
        for i in range(T):
            for j in range(S):
                dp[i + 1][j + 1] = dp[i + 1][j]
                if t[i] == s[j]:
                    dp[i + 1][j + 1] += dp[i][j]
        return dp[-1][-1]


# TESTS
for s, t, expected in [
    ("rabbbit", "rabbit", 3),
    ("babgbag", "bag", 5),
]:
    sol = Solution()
    actual = sol.numDistinct(s, t)
    print("# of distinct subsequences of", s, "equals to", t, "->", actual)
    assert actual == expected
