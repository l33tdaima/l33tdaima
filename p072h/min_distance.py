class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        m, n = len(word1), len(word2)
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        for j in range(1, n + 1):
            dp[0][j] = j
        for i in range(1, m + 1):
            dp[i][0] = i
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                dp[i][j] = (
                    1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
                    if word1[i - 1] != word2[j - 1]
                    else dp[i - 1][j - 1]
                )
        return dp[-1][-1]


# TESTS
tests = [
    ("", "", 0),
    ("", "abc", 3),
    ("abcd", "", 4),
    ("horse", "ros", 3),
    ("intention", "execution", 5),
]
for t in tests:
    sol = Solution()
    actual = sol.minDistance(t[0], t[1])
    print(f"Mininum edit distance coverting '{t[0]}' to '{t[1]}' ->", actual)
