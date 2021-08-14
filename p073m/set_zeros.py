from typing import List


class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        # cell[0][0] is used twice for row and col flags, we need an extra flag
        # to indicate if col 0 should be set zeroes
        m, n, c00 = len(matrix), len(matrix[0]), 1
        for i in range(m):
            if matrix[i][0] == 0:
                c00 = 0
            for j in range(1, n):
                if matrix[i][j] == 0:
                    matrix[0][j], matrix[i][0] = 0, 0
        for i in range(m)[::-1]:
            for j in range(1, n)[::-1]:
                if matrix[i][j] != 0 and (matrix[0][j] == 0 or matrix[i][0] == 0):
                    matrix[i][j] = 0
            if c00 == 0:
                matrix[i][0] = 0


# TESTS
for matrix, expected in [
    ([[1, 1, 1], [1, 0, 1], [1, 1, 1]], [[1, 0, 1], [0, 0, 0], [1, 0, 1]]),
    (
        [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]],
        [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]],
    ),
    (
        [[1, 2, 3, 4], [5, 0, 7, 8], [0, 10, 11, 12], [13, 14, 15, 0]],
        [[0, 0, 3, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    ),
]:
    sol = Solution()
    print("Set matrix", matrix, "zeroes ->")
    sol.setZeroes(matrix)
    print("  ", matrix)
    assert matrix == expected
