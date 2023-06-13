from collections import defaultdict


class Solution:
    def equalPairs(self, grid: list[list[int]]) -> int:
        n, ans = len(grid), 0
        ht = defaultdict(int)
        for row in grid:
            ht[tuple(v for v in row)] += 1

        for c in range(n):
            col = tuple(grid[r][c] for r in range(n))
            ans += ht[col]
        return ans


# TESTS
for grid, expected in [
    ([[3, 2, 1], [1, 7, 6], [2, 7, 7]], 1),
    ([[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]], 3),
]:
    sol = Solution()
    actual = sol.equalPairs(grid)
    print("# of equal pairs in", grid, "->", actual)
    assert actual == expected
