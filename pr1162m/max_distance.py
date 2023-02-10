from itertools import chain


class Solution:
    def maxDistance(self, grid: list[list[int]]) -> int:
        n, step = len(grid), 0
        queue = list(
            chain.from_iterable(
                ((i - 1, j), (i + 1, j), (i, j - 1), (i, j + 1))
                for i in range(n)
                for j in range(n)
                if grid[i][j] == 1
            )
        )
        while queue:
            step, nqueue = step + 1, []
            for i, j in queue:
                if i >= 0 and j >= 0 and i < n and j < n and grid[i][j] == 0:
                    grid[i][j] = step  # mark visited
                    nqueue.extend(
                        [(i - 1, j), (i + 1, j), (i, j - 1), (i, j + 1)]
                    )
            queue = nqueue
        return step - 1 if step > 1 else -1


# TESTS
for grid, expected in [
    ([[1, 0, 1], [0, 0, 0], [1, 0, 1]], 2),
    ([[1, 0, 0], [0, 0, 0], [0, 0, 0]], 4),
]:
    sol = Solution()
    actual = sol.maxDistance(grid)
    print("Maximum distance ->", actual)
    assert actual == expected
