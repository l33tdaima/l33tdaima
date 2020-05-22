from typing import List


class Solution:
    def countSquares(self, matrix: List[List[int]]) -> int:
        ans, rows, cols = 0, len(matrix), len(matrix[0])
        for i in range(rows):
            for j in range(cols):
                if matrix[i][j] == 1 and i and j:
                    matrix[i][j] = (
                        min(
                            matrix[i - 1][j],
                            matrix[i][j - 1],
                            matrix[i - 1][j - 1],
                        )
                        + 1
                    )
                ans += matrix[i][j]
        return ans


# TESTS
tests = [
    ([[0]], 0),
    ([[1]], 1),
    ([[1, 0]], 1),
    ([[1, 0], [1, 1]], 3),
    ([[1, 1], [1, 1]], 5),
    ([[1, 0, 1], [1, 1, 0], [1, 1, 0]], 7),
    ([[1, 1, 1], [1, 1, 1], [1, 1, 1]], 14),
    ([[0, 1, 1, 1], [1, 1, 1, 1], [0, 1, 1, 1]], 15),
]
for t in tests:
    sol = Solution()
    actual = sol.countSquares(t[0])
    print("Square submatrices have all ones ->", actual)
