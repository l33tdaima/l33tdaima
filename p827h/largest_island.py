from typing import List


class Solution:
    def largestIsland(self, grid: List[List[int]]) -> int:
        ans, n = 0, len(grid)

        def get(i, j):
            return 0 if i < 0 or j < 0 or i >= n or j >= n else grid[i][j]

        def paint(i, j, clr):
            if get(i, j) != 1:
                return 0
            grid[i][j] = clr
            return (
                1
                + paint(i + 1, j, clr)
                + paint(i - 1, j, clr)
                + paint(i, j + 1, clr)
                + paint(i, j - 1, clr)
            )

        sizes = [0, 0]  # sentinel values; valid colors start from 2.
        for i in range(n):
            for j in range(n):
                if grid[i][j] == 1:
                    sizes.append(paint(i, j, len(sizes)))

        for i in range(n):
            for j in range(n):
                if grid[i][j] == 0:
                    ans = max(
                        ans,
                        1
                        + sum(
                            sizes[c]
                            for c in {
                                get(i + 1, j),
                                get(i - 1, j),
                                get(i, j + 1),
                                get(i, j - 1),
                            }
                        ),
                    )
        return n * n if not ans else ans


# TESTS
for grid, expected in [
    ([[1, 0], [0, 1]], 3),
    ([[1, 1], [1, 0]], 4),
    ([[1, 1], [1, 1]], 4),
]:
    sol = Solution()
    print("The largest island in ", grid, "after changing one 0:")
    actual = sol.largestIsland(grid)
    print("  ->", actual)
    assert actual == expected
