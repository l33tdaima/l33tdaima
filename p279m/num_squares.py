import math


class Solution:
    def numSquares(self, n: int) -> int:
        squares = [i * i for i in range(1, int(math.sqrt(n)) + 1)]
        dp = [0] * (n + 1)
        for i in range(1, n + 1):
            dp[i] = min(dp[i - k] for k in squares if i - k >= 0) + 1
        return dp[n]


# TESTS
for n, expected in [
    [1, 1],  # 1
    [2, 2],  # 1 + 1
    [3, 3],  # 1 + 1 + 1
    [4, 1],  # 4
    [5, 2],  # 4 + 1
    [6, 3],  # 4 + 1 + 1
    [7, 4],  # 4 + 1 + 1 + 1
    [8, 2],  # 4 + 4
    [12, 3],
    [13, 2],
]:
    sol = Solution()
    actual = sol.numSquares(n)
    print(
        "The least # of perfect squares sum to",
        n,
        "->",
        actual,
    )
    assert actual == expected
