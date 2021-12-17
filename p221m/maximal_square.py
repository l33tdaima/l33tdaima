class Solution:
    def maximalSquare(self, matrix: list[list[str]]) -> int:
        m, n, maxlen = len(matrix), len(matrix[0]), 0
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        for i in range(m):
            for j in range(n):
                if matrix[i][j] == "1":
                    dp[i + 1][j + 1] = (
                        min(dp[i][j + 1], dp[i][j], dp[i + 1][j]) + 1
                    )
                    maxlen = max(maxlen, dp[i + 1][j + 1])
        return maxlen * maxlen


for matrix, expected in [
    (
        [
            ["1", "0", "1", "0", "0"],
            ["1", "0", "1", "1", "1"],
            ["1", "1", "1", "1", "1"],
            ["1", "0", "0", "1", "0"],
        ],
        4,
    ),
    ([["0", "1"], ["1", "0"]], 1),
    ([["0"]], 0),
]:
    sol = Solution()
    actual = sol.maximalSquare(matrix)
    print("The largest square area containing 1 in", matrix, "->", actual)
    assert actual == expected
