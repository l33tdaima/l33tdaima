from cmath import exp


class Solution:
    def findBall(self, grid: list[list[int]]) -> list[int]:
        m, n = len(grid), len(grid[0])
        # When getting to row_i of grid, the source index of the ball
        source = list(range(n))
        for i in range(m):
            nxt = [-1] * n
            for j, pos in enumerate(source):
                if pos == -1:
                    continue
                if j + 1 < n and grid[i][j] == grid[i][j + 1] == 1:
                    nxt[j + 1] = pos
                if j - 1 >= 0 and grid[i][j - 1] == grid[i][j] == -1:
                    nxt[j - 1] = pos
            source = nxt
        # Convert to the answer
        answer = [-1] * n
        for j, pos in enumerate(source):
            if pos != -1:
                answer[pos] = j
        return answer


# TESTS
for grid, expected in [
    (
        [
            [1, 1, 1, -1, -1],
            [1, 1, 1, -1, -1],
            [-1, -1, -1, 1, 1],
            [1, 1, 1, 1, -1],
            [-1, -1, -1, -1, -1],
        ],
        [1, -1, -1, -1, -1],
    ),
    ([[-1]], [-1]),
    (
        [
            [1, 1, 1, 1, 1, 1],
            [-1, -1, -1, -1, -1, -1],
            [1, 1, 1, 1, 1, 1],
            [-1, -1, -1, -1, -1, -1],
        ],
        [0, 1, 2, 3, 4, -1],
    ),
]:
    sol = Solution()
    actual = sol.findBall(grid)
    print("Where will the ball fall ->", actual)
    assert actual == expected
