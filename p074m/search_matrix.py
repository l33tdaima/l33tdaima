from typing import List


class Solution:
    def searchMatrixV1(self, matrix: List[List[int]], target: int) -> bool:
        if not matrix or not matrix[0]:
            return False
        M, N = len(matrix), len(matrix[0])
        l, r = 0, M - 1
        while l < r:
            m = (l + r - 1) // 2 + 1
            if target == matrix[m][0]:
                return True
            elif target < matrix[m][0]:
                r = m - 1
            else:
                l = m
        row, l, r = matrix[l], 0, N - 1
        while l <= r:
            m = (l + r) // 2
            if target == row[m]:
                return True
            elif target < row[m]:
                r = m - 1
            else:
                l = m + 1
        return False

    def searchMatrixV2(self, matrix: List[List[int]], target: int) -> bool:
        if not matrix or not matrix[0]:
            return False
        M, N = len(matrix), len(matrix[0])
        l, r = 0, M * N - 1
        while l <= r:
            m = (l + r) // 2
            mv = matrix[m // N][m % N]
            if target == mv:
                return True
            elif target < mv:
                r = m - 1
            else:
                l = m + 1
        return False


# TESTS
for matrix, target, expected in [
    ([], 0, False),
    ([[1]], 1, True),
    ([[1, 1]], 2, False),
    ([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3, True),
    ([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 13, False),
]:
    sol = Solution()
    actual = sol.searchMatrixV2(matrix, target)
    print("Search", target, "in", matrix, "->", actual)
    assert actual == expected
