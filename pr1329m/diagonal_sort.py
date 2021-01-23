from typing import List
from collections import defaultdict


class Solution:
    def diagonalSort(self, mat: List[List[int]]) -> List[List[int]]:
        ans = [[0 for _ in r] for r in mat]
        m, n = len(mat), len(mat[0])
        diag = defaultdict(list)
        for i in range(m):
            for j in range(n):
                diag[i - j].append(mat[i][j])
        for d in diag:
            diag[d].sort(reverse=True)
        for i in range(m):
            for j in range(n):
                ans[i][j] = diag[i - j].pop()
        return ans


# TESTS
for mat, expected in [
    ([[1]], [[1]]),
    (
        [[3, 3, 1, 1], [2, 2, 1, 2], [1, 1, 1, 2]],
        [[1, 1, 1, 1], [1, 2, 2, 2], [1, 2, 3, 3]],
    ),
]:
    sol = Solution()
    actual = sol.diagonalSort(mat)
    print("Diagonal sort", mat, "->", actual)
    assert actual == expected
