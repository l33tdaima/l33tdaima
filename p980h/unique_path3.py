from typing import List


class Solution:
    def uniquePathsIII(self, grid: List[List[int]]) -> int:
        self.ans = 0
        rows, cols, empty_count = len(grid), len(grid[0]), 1
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 0:
                    empty_count += 1
                elif grid[r][c] == 1:
                    x, y = (r, c)
        visited = set()

        def dfs(r: int, c: int, empty_count: int) -> None:
            if not ((0 <= r < rows) and (0 <= c < cols) and grid[r][c] != -1):
                return
            if (r, c) in visited:
                return
            if grid[r][c] == 2:
                self.ans += empty_count == 0
                return
            visited.add((r, c))
            for dr, dc in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
                dfs(r + dr, c + dc, empty_count - 1)
            visited.remove((r, c))

        dfs(x, y, empty_count)
        return self.ans


# TESTS
tests = [
    ([[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 2, -1]], 2),
    ([[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 2]], 4),
    ([[0, 1], [2, 0]], 0),
]
for grid, expected in tests:
    sol = Solution()
    actual = sol.uniquePathsIII(grid)
    print("Unique path III of", grid, "->", actual)
    assert actual == expected
