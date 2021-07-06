from typing import List


class Solution:
    def matrixReshape(self, mat: List[List[int]], r: int, c: int) -> List[List[int]]:
        if not mat or len(mat) * len(mat[0]) != r * c:
            return mat
        ans = [[0] * c for _ in range(r)]
        i, j = 0, 0
        for row in mat:
            for cell in row:
                if j == c:
                    i, j = i + 1, 0
                ans[i][j] = cell
                j += 1
        return ans


# TESTS
for mat, r, c, expected in [
    ([[1, 2], [3, 4]], 1, 4, [1, 2, 3, 4]),
    ([[1, 2], [3, 4]], 2, 4, [[1, 2], [3, 4]]),
    ([[1, 2], [3, 4], [5, 6]], 2, 3, [[1, 2, 3], [4, 5, 6]]),
]:
    sol = Solution()
    actual = sol.matrixReshape(mat, r, c)
    print("Reshape", mat, "to", r, "x", c, "->", actual)

