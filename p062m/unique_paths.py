from collections import defaultdict


class Solution:
    def uniquePathsV1(self, m: int, n: int) -> int:
        dp = defaultdict(int)
        dp[0, 1] = 1
        for i in range(1, n + 1):
            for j in range(1, m + 1):
                dp[i, j] = dp[i - 1, j] + dp[i, j - 1]
        return dp[n, m]

    def uniquePathsV2(self, m: int, n: int) -> int:
        dp = [0 for _ in range(m + 1)]
        dp[1] = 1
        for i in range(1, n + 1):
            for j in range(1, m + 1):
                dp[j] += dp[j - 1]
        return dp[m]


# TESTS
for m, n, expected in [
    (1, 1, 1),
    (5, 1, 1),
    (1, 4, 1),
    (2, 2, 2),
    (3, 2, 3),
    (2, 3, 3),
    (7, 3, 28),
]:
    sol = Solution()
    actual = sol.uniquePathsV2(m, n)
    print("Unique paths of", m, "x", n, "grid ->", actual)
    assert actual == expected
