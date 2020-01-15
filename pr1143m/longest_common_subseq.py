class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        nr, nc = len(text1), len(text2)
        dp = [[0] * (nc + 1) for _ in range(nr + 1)]
        for i in range(1, nr + 1):
            for j in range(1, nc + 1):
                if text1[i - 1] == text2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + 1
                else:
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
        return dp[nr][nc]


# TESTS
tests = [
    ("a", "c", 0),
    ("a", "a", 1),
    ("abcde", "ace", 3),
    ("abc", "abc", 3),
    ("abc", "def", 0),
]
for t in tests:
    sol = Solution()
    actual = sol.longestCommonSubsequence(t[0], t[1])
    print("Length of LCS between", t[0], t[1], "->", actual)
    assert actual == t[2]
