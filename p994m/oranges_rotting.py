from typing import List


class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        FRESH, ROTTEN = 1, 2
        DIRS = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        ans, rows, cols = 0, len(grid), len(grid[0])
        # Enqueue the rotten orange
        queue = [
            (i, j)
            for i, row in enumerate(grid)
            for j, o in enumerate(row)
            if o == ROTTEN
        ]
        while queue:
            next_queue = list()
            for i, j in queue:
                for d in DIRS:
                    ni, nj = i + d[0], j + d[1]
                    if (
                        0 <= ni < rows
                        and 0 <= nj < cols
                        and grid[i + d[0]][j + d[1]] == FRESH
                    ):
                        grid[ni][nj] = ROTTEN
                        next_queue.append((ni, nj))
            queue = next_queue
            ans += 1 if next_queue else 0

        return -1 if any(o == FRESH for row in grid for o in row) else ans


# TESTS
for grid, expected in [
    ([[2, 1, 1], [1, 1, 0], [0, 1, 1]], 4),
    ([[2, 1, 1], [0, 1, 1], [1, 0, 1]], -1),
    ([[0, 2]], 0),
    ([[0]], 0),
]:
    sol = Solution()
    actual = sol.orangesRotting(grid)
    print("Mininum number of minutes elapse ->", actual)
    assert actual == expected
