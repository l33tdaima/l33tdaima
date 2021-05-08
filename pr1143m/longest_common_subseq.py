class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        L1, L2 = len(text1), len(text2)
        dp = [[0] * (L2 + 1) for _ in range(L1 + 1)]
        for i in range(1, L1 + 1):
            for j in range(1, L2 + 1):
                dp[i][j] = max(
                    dp[i - 1][j],
                    dp[i][j - 1],
                    dp[i - 1][j - 1] + (text1[i - 1] == text2[j - 1]),
                )
        return dp[L1][L2]


# TESTS
for text1, text2, expected in [
    ("a", "c", 0),
    ("a", "a", 1),
    ("abcde", "ace", 3),
    ("abc", "abc", 3),
    ("abc", "def", 0),
]:
    sol = Solution()
    actual = sol.longestCommonSubsequence(text1, text2)
    print("Length of LCS between", text1, text2, "->", actual)
    assert actual == expected
