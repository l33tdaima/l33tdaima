from typing import List
from collections import deque


class Solution:
    def shortestPath(self, grid: List[List[int]], k: int) -> int:
        m, n = len(grid), len(grid[0])
        if m == 1 and n == 1:
            return 0
        if k > (m - 1 + n - 1):
            return m - 1 + n - 1
        visited = set((0, 0, k))
        queue = deque([(0, 0, k, 0)])  # i, j, remaining eliminates, steps
        while queue:
            i, j, r, steps = queue.popleft()
            for ni, nj in [(i - 1, j), (i, j - 1), (i + 1, j), (i, j + 1)]:
                if not (0 <= ni < m and 0 <= nj < n):
                    continue
                if grid[ni][nj] == 0 and (ni, nj, r) not in visited:
                    if ni == m - 1 and nj == n - 1:
                        return steps + 1
                    visited.add((ni, nj, r))
                    queue.append((ni, nj, r, steps + 1))
                if grid[ni][nj] == 1 and r > 0 and (ni, nj, r - 1) not in visited:
                    visited.add((ni, nj, r - 1))
                    queue.append((ni, nj, r - 1, steps + 1))
        return -1


# TESTS
for grid, k, expected in [
    ([[0, 0, 0], [1, 1, 0], [0, 0, 0], [0, 1, 1], [0, 0, 0]], 1, 6),
    ([[0, 1, 1], [1, 1, 1], [1, 0, 0]], 1, -1),
    ([[0]], 1, 0),
    (
        [
            [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1],
            [1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
            [1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1],
            [0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1],
            [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0],
        ],
        27,
        24,
    ),
]:
    sol = Solution()
    actual = sol.shortestPath(grid, k)
    print("Shortest path of grid", grid, ", k =", k, "->", actual)
    assert actual == expected
