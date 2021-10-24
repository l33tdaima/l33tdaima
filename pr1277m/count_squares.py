from typing import List


class Solution:
    # Without modifying input
    def countSquaresV1(self, matrix: List[List[int]]) -> int:
        ans, rows, cols = 0, len(matrix), len(matrix[0])
        dp = [[0] * (cols + 1) for _ in range(rows + 1)]
        for i in range(rows):
            for j in range(cols):
                if matrix[i][j] == 1:
                    dp[i + 1][j + 1] = (
                        min(
                            dp[i + 1][j],
                            dp[i][j + 1],
                            dp[i][j],
                        )
                        + 1
                    )
                ans += dp[i + 1][j + 1]
        return ans

    # Modifying input to achieve O(1) in space
    def countSquaresV2(self, matrix: List[List[int]]) -> int:
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
for matrix, expected in [
    ([[0]], 0),
    ([[1]], 1),
    ([[1, 0]], 1),
    ([[1, 0], [1, 1]], 3),
    ([[1, 1], [1, 1]], 5),
    ([[1, 0, 1], [1, 1, 0], [1, 1, 0]], 7),
    ([[1, 1, 1], [1, 1, 1], [1, 1, 1]], 14),
    ([[0, 1, 1, 1], [1, 1, 1, 1], [0, 1, 1, 1]], 15),
]:
    sol = Solution()
    actual1 = sol.countSquaresV1(matrix)
    actual2 = sol.countSquaresV2(matrix)
    print("Square submatrices have all ones ->", actual2)
    assert actual1 == expected
    assert actual2 == expected
