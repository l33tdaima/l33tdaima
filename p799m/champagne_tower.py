from math import isclose


class Solution:
    def champagneTower(self, poured: int, query_row: int, query_glass: int) -> float:
        dp = [poured] + [0] * query_row
        for r in range(1, query_row + 1):
            for c in range(r, -1, -1):
                dp[c] = max(dp[c] - 1, 0) / 2.0 + max(dp[c - 1] - 1, 0) / 2.0
        return min(1.0, dp[query_glass])


# TESTS
for poured, query_row, query_glass, expected in [
    (1, 1, 1, 0.0),
    (2, 1, 1, 0.5),
    (4, 1, 1, 1.0),
    (4, 2, 1, 0.5),
    (4, 2, 2, 0.25),
    (100000009, 33, 17, 1.0),
]:
    sol = Solution()
    actual = sol.champagneTower(poured, query_row, query_glass)
    print("Poured", poured, ", row", query_row, ", glass", query_glass, "->", actual)
    assert isclose(actual, expected)
