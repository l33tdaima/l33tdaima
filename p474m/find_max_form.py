from typing import List
from collections import Counter


class Solution:
    def findMaxForm(self, strs: List[str], m: int, n: int) -> int:
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        for c0, c1 in [(c["0"], c["1"]) for c in map(Counter, strs)]:
            for x in range(m + 1)[::-1]:
                for y in range(n + 1)[::-1]:
                    if x >= c0 and y >= c1:
                        dp[x][y] = max(dp[x][y], dp[x - c0][y - c1] + 1)
        return dp[m][n]


# TESTS
for strs, m, n, expected in [
    (["10", "0001", "111001", "1", "0"], 5, 3, 4),
    (["10", "0", "1"], 1, 1, 2),
]:
    sol = Solution()
    actual = sol.findMaxForm(strs, m, n)
    print(
        "The size of largest subset of",
        strs,
        "of at most",
        m,
        "0's and",
        n,
        "1's ->",
        actual,
    )
    assert actual == expected
