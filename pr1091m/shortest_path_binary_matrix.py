from typing import List


class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        if grid[0][0] or grid[-1][-1]:
            return -1
        DIR = [(0, 1), (1, 1), (1, 0), (1, -1), (0, -1), (-1, -1), (-1, 0), (-1, 1)]
        N, queue = len(grid), [(0, 0, 1)]  # i, j, path
        while queue:
            i, j, path = queue.pop(0)
            if i == N - 1 and j == N - 1:
                return path
            for di, dj in DIR:
                ni, nj = i + di, j + dj
                if 0 <= ni < N and 0 <= nj < N and grid[ni][nj] == 0:
                    grid[ni][nj] = -1
                    queue.append((ni, nj, path + 1))
        return -1


# TESTS
for grid, expected in [
    ([[1]], -1),
    ([[0]], 1),
    ([[0, 1], [1, 0]], 2),
    ([[0, 0, 0], [1, 1, 0], [1, 1, 0]], 4),
]:
    sol = Solution()
    print("Shortest clear path in", grid, "->", expected)
    actual = sol.shortestPathBinaryMatrix(grid)
    assert actual == expected

