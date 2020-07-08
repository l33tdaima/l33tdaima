from typing import List


class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        ans, R, C = 0, len(grid), len(grid[0])
        for i in range(R):
            for j in range(C):
                if grid[i][j] == 1:
                    p = 4
                    if i > 0 and grid[i - 1][j] == 1:
                        p -= 2
                    if j > 0 and grid[i][j - 1] == 1:
                        p -= 2
                    ans += p
        return ans


# TESTS
tests = [
    ([[0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], 4),
    ([[0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], 6),
    ([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]], 16),
]
for t in tests:
    sol = Solution()
    actual = sol.islandPerimeter(t[0])
    print("Perimeter of the island ->", actual)
    assert actual == t[1]
