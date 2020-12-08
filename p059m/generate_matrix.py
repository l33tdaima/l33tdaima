from typing import List


class Solution:
    def generateMatrixV1(self, n: int) -> List[List[int]]:
        matrix = [[0] * n for _ in range(0, n)]
        istart, jstart, v = 0, 0, 1
        for level in range(n, 0, -2):
            i, j = istart, jstart
            while j < jstart + level - 1:
                matrix[i][j], v, j = v, v + 1, j + 1
            while i < istart + level - 1:
                matrix[i][j], v, i = v, v + 1, i + 1
            while j > jstart:
                matrix[i][j], v, j = v, v + 1, j - 1
            while i > istart:
                matrix[i][j], v, i = v, v + 1, i - 1
            if level == 1:
                matrix[i][j], v = v, v + 1
            istart, jstart = istart + 1, jstart + 1
        return matrix

    def generateMatrixV2(self, n: int) -> List[List[int]]:
        matrix = [[0] * n for _ in range(n)]
        i, j, di, dj = 0, 0, 0, 1
        for v in range(1, n * n + 1):
            matrix[i][j] = v
            if matrix[(i + di) % n][(j + dj) % n]:
                di, dj = dj, -di
            i, j = i + di, j + dj
        return matrix


# TESTS
for n, expected in [
    (1, [[1]]),
    (3, [[1, 2, 3], [8, 9, 4], [7, 6, 5]]),
    (4, [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]),
    (
        5,
        [
            [1, 2, 3, 4, 5],
            [16, 17, 18, 19, 6],
            [15, 24, 25, 20, 7],
            [14, 23, 22, 21, 8],
            [13, 12, 11, 10, 9],
        ],
    ),
]:
    sol = Solution()
    actual = sol.generateMatrixV1(n)
    print("Spiral matrix of", n, "->", actual)
    assert actual == expected
    assert expected == sol.generateMatrixV2(n)
