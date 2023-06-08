class Solution:
    def countNegatives(self, grid: list[list[int]]) -> int:
        M, N = len(grid), len(grid[0])
        r, c, ans = 0, N - 1, 0
        while r < M and c >= 0:
            if grid[r][c] < 0:
                c -= 1
                ans += M - r
            else:
                r += 1
        return ans


# TESTS
for grid, expected in [
    ([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]], 8),
]:
    sol = Solution()
    actual = sol.countNegatives(grid)
    print("Count of negatives in", grid, "->", actual)
    assert actual == expected
