from functools import lru_cache


class Solution:
    def longestPalindromeSubseqTD(self, s: str) -> int:
        @lru_cache
        def lps(i: int, j: int) -> int:
            nonlocal s
            if i > j:
                return 0
            if i == j:
                return 1
            if s[i] == s[j]:
                return 2 + lps(i + 1, j - 1)
            else:
                return max(lps(i, j - 1), lps(i + 1, j))

        return lps(0, len(s) - 1)

    def longestPalindromeSubseqBU(self, s: str) -> int:
        n = len(s)
        dp = [[0] * n for _ in range(n)]
        for i in range(n - 1, -1, -1):
            dp[i][i] = 1
            for j in range(i + 1, n):
                if s[i] == s[j]:
                    dp[i][j] = 2 + dp[i + 1][j - 1]
                else:
                    dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])
        return dp[0][n - 1]


# TESTS
for s, expected in [
    ("z", 1),
    ("bbbab", 4),
    ("cbbd", 2),
]:
    sol = Solution()
    actual = sol.longestPalindromeSubseqBU(s)
    print(f"Longest Palindromic Subsequence in {s} -> {actual}")
    assert actual == expected
    assert expected == sol.longestPalindromeSubseqTD(s)
