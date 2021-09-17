from typing import List


class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        return [*matrix.pop(0)] + self.spiralOrder([*zip(*matrix)][::-1])


# TESTS
for matrix, expected in [
    ([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [1, 2, 3, 6, 9, 8, 7, 4, 5]),
    (
        [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]],
        [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
    ),
]:
    sol = Solution()
    actual = sol.spiralOrder(matrix)
    print("Spiral order of", matrix, "->", actual)
    assert actual == expected
