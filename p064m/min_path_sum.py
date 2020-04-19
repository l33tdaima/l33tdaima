import sys
from typing import List


class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        if len(grid) == 0:
            return 0
        state = [0] + [sys.maxsize] * (len(grid[0]) - 1)
        for row in grid:
            state[0] = state[0] + row[0]
            for j in range(1, len(row)):
                state[j] = min(state[j - 1], state[j]) + row[j]
        return state[-1]


# TESTS
tests = [
    ([[1]], 1),
    ([[1, 2, 3]], 6),
    ([[3], [2], [1]], 6),
    ([[1, 3, 1], [1, 5, 1], [4, 2, 1]], 7),
]
for t in tests:
    sol = Solution()
    actual = sol.minPathSum(t[0])
    print("Minimum Path Sum of", t[0], "->", actual)
    assert actual == t[1]
