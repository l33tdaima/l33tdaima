from typing import List


class Solution:
    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
        DIRS = [(0, -1), (-1, 0), (0, 1), (1, 0)]
        rows, cols, ans = len(matrix), len(matrix[0]), 1
        memo = [[0] * cols for _ in range(rows)]

        # dfs with memoization
        def dfs(i: int, j: int) -> int:
            nonlocal rows, cols
            if memo[i][j] > 0:
                return memo[i][j]

            lip = 1
            for dr, dc in DIRS:
                nr, nc = i + dr, j + dc
                if 0 <= nr < rows and 0 <= nc < cols and matrix[nr][nc] > matrix[i][j]:
                    lip = max(lip, 1 + dfs(nr, nc))
            memo[i][j] = lip
            return lip

        for i in range(rows):
            for j in range(cols):
                ans = max(ans, dfs(i, j))
        return ans


# TESTS
for matrix, expected in [
    ([[9, 9, 4], [6, 6, 8], [2, 1, 1]], 4),
    ([[3, 4, 5], [3, 2, 6], [2, 2, 1]], 4),
    ([[1]], 1),
]:
    sol = Solution()
    actual = sol.longestIncreasingPath(matrix)
    print("The longest increasing path in matrix", matrix, "->", actual)
    assert actual == expected
