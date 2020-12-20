from typing import List
from itertools import product


class Solution:
    def cherryPickup(self, grid: List[List[int]]) -> int:
        R, C = len(grid), len(grid[0])
        dp = [[[float("-Inf")] * (C + 2) for _ in range(C + 2)] for _ in range(R)]
        dp[0][1][C] = grid[0][0] + grid[0][C - 1]
        for i in range(1, R):
            for j1, j2 in product(range(1, C + 1), range(1, C + 1)):
                prev = []
                for d1, d2 in product([-1, 0, 1], [-1, 0, 1]):
                    prev.append(dp[i - 1][j1 + d1][j2 + d2])
                    dp[i][j1][j2] = (grid[i][j1 - 1] + grid[i][j2 - 1]) // (
                        1 + (j1 == j2)
                    ) + max(prev)
        return max(map(max, dp[-1]))


# TESTS
for grid, expected in [
    ([[3, 1, 1], [2, 5, 1], [1, 5, 5], [2, 1, 1]], 24),
    (
        [
            [1, 0, 0, 0, 0, 0, 1],
            [2, 0, 0, 0, 0, 3, 0],
            [2, 0, 9, 0, 0, 0, 0],
            [0, 3, 0, 5, 4, 0, 0],
            [1, 0, 2, 3, 0, 0, 6],
        ],
        28,
    ),
    ([[1, 0, 0, 3], [0, 0, 0, 3], [0, 0, 3, 3], [9, 0, 3, 3]], 22),
    ([[1, 1], [1, 1]], 4),
    (
        [
            [0, 8, 7, 10, 9, 10, 0, 9, 6],
            [8, 7, 10, 8, 7, 4, 9, 6, 10],
            [8, 1, 1, 5, 1, 5, 5, 1, 2],
            [9, 4, 10, 8, 8, 1, 9, 5, 0],
            [4, 3, 6, 10, 9, 2, 4, 8, 10],
            [7, 3, 2, 8, 3, 3, 5, 9, 8],
            [1, 2, 6, 5, 6, 2, 0, 10, 0],
        ],
        96,
    ),
]:
    sol = Solution()
    actual = sol.cherryPickup(grid)
    print("The maximum number of cherries from", grid, "->", actual)
    assert actual == expected
