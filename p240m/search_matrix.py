from typing import List


class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        row, col, n = len(matrix) - 1, 0, len(matrix[0])
        while row >= 0 and col < n:
            cv = matrix[row][col]
            if cv == target:
                return True
            if target < cv:
                row -= 1
            else:
                col += 1
        return False


# TESTS
matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
]
for target, expected in [
    (0, False),
    (1, True),
    (5, True),
    (16, True),
    (20, False),
    (99, False),
]:
    sol = Solution()
    actual = sol.searchMatrix(matrix, target)
    print("Search target", target, "in matrix ->", actual)
    assert actual == expected

