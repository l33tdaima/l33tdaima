from typing import List


class Solution:
    def orderOfLargestPlusSign(self, n: int, mines: List[List[int]]) -> int:
        grid = [[n] * n for _ in range(n)]
        for i, j in mines:
            grid[i][j] = 0
        for i in range(n):
            l, r, u, d = 0, 0, 0, 0
            for j, k in zip(range(n), reversed(range(n))):
                l = l + 1 if grid[i][j] != 0 else 0
                grid[i][j] = min(grid[i][j], l)

                r = r + 1 if grid[i][k] != 0 else 0
                grid[i][k] = min(grid[i][k], r)

                u = u + 1 if grid[j][i] != 0 else 0
                grid[j][i] = min(grid[j][i], u)

                d = d + 1 if grid[k][i] != 0 else 0
                grid[k][i] = min(grid[k][i], d)

        return max(map(max, grid))


# TESTS
for n, mines, expected in [
    (5, [[4, 2]], 2),
    (1, [[0, 0]], 0),
]:
    sol = Solution()
    actual = sol.orderOfLargestPlusSign(n, mines)
    print(
        "The order of the largest plus sign in n =", n, ", mines =", mines, "->", actual
    )
    assert actual == expected
