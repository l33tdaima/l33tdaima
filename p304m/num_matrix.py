from typing import List
from itertools import accumulate


class NumMatrix:
    def __init__(self, matrix: List[List[int]]):
        m, n = len(matrix), len(matrix[0])
        self.psum = [[0] * (n + 1)] + [[0] + list(accumulate(row)) for row in matrix]
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                self.psum[i][j] += self.psum[i - 1][j]

    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        return (
            self.psum[row2 + 1][col2 + 1]
            - self.psum[row1][col2 + 1]
            - self.psum[row2 + 1][col1]
            + self.psum[row1][col1]
        )


# Your NumMatrix object will be instantiated and called as such:
# obj = NumMatrix(matrix)
# param_1 = obj.sumRegion(row1,col1,row2,col2)
nm = NumMatrix(
    [
        [3, 0, 1, 4, 2],
        [5, 6, 3, 2, 1],
        [1, 2, 0, 1, 5],
        [4, 1, 0, 1, 7],
        [1, 0, 3, 0, 5],
    ]
)
for region, expected in [([2, 1, 4, 3], 8), ([1, 1, 2, 2], 11), ([1, 2, 2, 4], 12)]:
    row1, col1, row2, col2 = region
    actual = nm.sumRegion(row1, col1, row2, col2)
    print(f"sumRegion({row1}, {col1}, {row2}, {col2}) -> {actual}")

